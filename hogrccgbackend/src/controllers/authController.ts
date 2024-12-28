import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import db from '../db/knex';
import { generateToken, generateRefreshToken } from '../config/jwt';
import { verifyRefreshToken } from '../config/jwt';

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const { username, password } = req.body;

  try {
    const admin = await db('admin').where({ username }).first();

    if (!admin) {
      return res.status(400).json({ message: 'Admin not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const accessToken = generateToken(admin.id);
    const refreshToken = generateRefreshToken(admin.id);

    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 1); // 1 hour expiry for the refresh token

    // Save the refresh token to the database
    await db('refresh_tokens').insert({
      token: refreshToken,
      admin_id: admin.id,
      expires_at: expiry,
    });

    res.cookie('refresh_token', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: 'strict',
    });

    res.cookie('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60 * 1000,
      sameSite: 'strict',
    });

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

  
export const refreshToken = async (req: Request, res: Response): Promise<any> => {
  const refreshToken = req.cookies['refresh_token'];

  if (!refreshToken) {
    return res.status(403).json({ message: 'Refresh token not found, please login again' });
  }

  try {
    // Check if the token exists in the database
    const tokenRecord = await db('refresh_tokens')
      .where({ token: refreshToken })
      .andWhere('expires_at', '>', new Date())
      .first();

    if (!tokenRecord) {
      return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }

    const decoded = verifyRefreshToken(refreshToken);

    if (!decoded || !decoded.id) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const newAccessToken = generateToken(decoded.id);

    res.cookie('access_token', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60 * 1000,
      sameSite: 'strict',
    });

    return res.status(200).json({ message: 'Access token refreshed' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

  
export const logout = async (req: Request, res: Response): Promise<any> => {
  const refreshToken = req.cookies['refresh_token'];

  try {
    if (refreshToken) {
      // Delete the token from the database
      await db('refresh_tokens').where({ token: refreshToken }).del();
    }

    res.clearCookie('access_token');
    res.clearCookie('refresh_token');

    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};




