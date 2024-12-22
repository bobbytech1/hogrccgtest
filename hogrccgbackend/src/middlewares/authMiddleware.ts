import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../config/jwt';

export interface AuthenticatedRequest extends Request {
  admin?: any;
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    res.status(403).json({ message: 'Access denied' });
    return;
  }

  try {
    const decoded = verifyToken(token);

    if (!decoded) {
      res.status(403).json({ message: 'Invalid token' });
      return;
    }

    req.admin = decoded; // Attach decoded admin info to the request
    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
