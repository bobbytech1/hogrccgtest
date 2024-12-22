import { Router } from 'express';
import { login } from '../controllers/authController';
import { refreshToken } from '../controllers/authController';
import { logout } from '../controllers/authController';

const router = Router();

router.post('/login', login);

// Refresh token route
router.post('/refresh-token', refreshToken);

// Logout route
router.post('/logout', logout);

export default router;
