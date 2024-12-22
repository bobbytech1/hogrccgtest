import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware'; // Import the custom type
import db from '../db/knex';

export const getAdminInfo = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const adminId = req.admin?.id;

    if (!adminId) {
      res.status(403).json({ message: 'Admin information not found' });
      return;
    }

    const admin = await db('admin').where('id', adminId).first();
    if (!admin) {
      res.status(404).json({ message: 'Admin not found' });
      return;
    }

    res.status(200).json(admin); // Send admin info as response
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
