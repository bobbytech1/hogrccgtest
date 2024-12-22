import jwt from 'jsonwebtoken';

export const generateToken = (adminId: number): string => {
  return jwt.sign({ id: adminId }, process.env.JWT_SECRET!, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    return null;
  }
};
