import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import db from '../db/knex';
import { generateToken, generateRefreshToken } from '../config/jwt';
import { verifyRefreshToken } from '../config/jwt';

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const { username, password } = req.body;
  
    try {
      // Find the admin by username
      const admin = await db('admin').where({ username }).first();
  
      if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
      }
  
      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' });
      }
  
      // Generate an access token with a short expiry (e.g., 15 minutes)
      const accessToken = generateToken(admin.id);
  
      // Generate a refresh token with a longer expiry (e.g., 1hr)
      const refreshToken = generateRefreshToken(admin.id);
  
      // Set the refresh token in an HTTP-only cookie (with a long expiry time)
      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        sameSite: 'strict',
      });
  
      // Set the access token in the response body or as a cookie (optional)
      res.cookie('access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
        sameSite: 'strict',
      });
  
      // Return a success message without sending the tokens in the response body
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  
  export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
      // Extract refresh token from cookies
      const refreshToken = req.cookies['refresh_token'];
  
      // If no refresh token, return a 403 status
      if (!refreshToken) {
        return res.status(403).json({ message: 'Refresh token not found, please login again' });
      }
  
      // Verify the refresh token and decode it
      const decoded = verifyRefreshToken(refreshToken);
  
      // Ensure the decoded token contains the 'id'
      if (!decoded || !decoded.id) {
        return res.status(403).json({ message: 'Invalid refresh token' });
      }
  
      // Generate a new access token using the decoded 'id'
      const newAccessToken = generateToken(decoded.id);
  
      // Set the new access token in the response cookies
      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        maxAge: 15 * 60 * 1000, // 15 minutes in milliseconds
        sameSite: 'strict',
      });
  
      // Return a success message indicating token refresh
      return res.status(200).json({ message: 'Access token refreshed' });
    } catch (error) {
      // If an error occurs, return a response directly
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  



  export const logout = async (req: Request, res: Response): Promise<any> => {
    try {
      // Clear the access and refresh token cookies
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');
  
      // Return a success message
      return res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };



