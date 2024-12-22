import jwt, { JwtPayload } from 'jsonwebtoken';

// Define an interface that extends JwtPayload to include the 'id' property
interface JwtPayloadWithId extends JwtPayload {
  id: number; // or string depending on your setup, but ensure it matches the type you use for admin.id
}

// Secret keys for signing JWT tokens (should be stored in your environment variables)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'your_refresh_token_secret';

// Function to generate an access token (short expiration, e.g., 15 minutes)
export const generateToken = (adminId: number): string => {
  return jwt.sign({ id: adminId }, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

// Function to generate a refresh token (longer expiration, e.g., 7 days)
export const generateRefreshToken = (adminId: number): string => {
  return jwt.sign({ id: adminId }, REFRESH_TOKEN_SECRET, { expiresIn: '1hr' });
};

// Function to verify the refresh token and return the decoded token
// It should return the payload with the 'id' property, or null if verification fails
export const verifyRefreshToken = (token: string): JwtPayloadWithId | null => {
  try {
    const decoded = jwt.verify(token, REFRESH_TOKEN_SECRET) as JwtPayloadWithId;
    return decoded; // Cast the decoded value to JwtPayloadWithId to safely access 'id'
  } catch (error) {
    return null; // If verification fails, return null
  }
};

// Function to verify the access token and return the decoded token
// The access token should have a shorter expiry, and you can return the decoded payload
export const verifyToken = (token: string): JwtPayloadWithId | null => {
  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET) as JwtPayloadWithId;
    return decoded; // Return the decoded token (with 'id' property)
  } catch (error) {
    return null; // If verification fails, return null
  }
};
