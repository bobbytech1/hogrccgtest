import express, { Router } from 'express';
import { ensureAdmin, updatePageContent, getPageContent, postPageContent } from '../controllers/contentController';
import {authMiddleware} from '../middlewares/authMiddleware';

const router: Router = express.Router();

// Route to create new page content (only accessible to admin)
router.post('/pages/post', ensureAdmin, postPageContent);

// Update page content (Admin only)
router.put('/pages/:slug', ensureAdmin, updatePageContent);

// Get the page content
router.get('/pages/:slug', getPageContent);

export default router;
