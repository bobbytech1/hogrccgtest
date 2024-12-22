import { Router } from 'express';
import { getAdminInfo } from '../controllers/adminController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/info', authMiddleware, getAdminInfo);

export default router;
