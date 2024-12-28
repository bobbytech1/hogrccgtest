import { Router } from 'express';
import { ensureAdmin } from '../controllers/contentController';
import {
  getBlogs,
  getBlogById,
  createOrUpdateBlog,
  editBlog,
  deleteBlog,
} from '../controllers/blogController';

const router = Router();

// Route to get all blogs
router.get('/blog', getBlogs);

// Route to get a single blog by ID
router.get('/blog/:id', getBlogById);

// Route to update a blog
router.post('/blog/:id', ensureAdmin, createOrUpdateBlog);

// Route to create a blog
router.post('/blog', ensureAdmin, createOrUpdateBlog);

// Route to edit (partial update) a blog
router.patch('/blog/:id', ensureAdmin, editBlog);

// Route to delete a blog
router.delete('/blog/:id', ensureAdmin, deleteBlog);

export default router;
