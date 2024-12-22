import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import db from '../db/knex';
import { generateToken } from '../config/jwt';

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

    // Generate a JWT token
    const token = generateToken(admin.id);

    // Return the token
    return res.status(200).json({ token });
  } catch (error) {
    // Handle server error
    return res.status(500).json({ message: 'Internal server error' });
  }
};
