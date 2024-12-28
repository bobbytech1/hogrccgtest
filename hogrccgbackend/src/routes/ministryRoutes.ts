import { Router } from 'express';
import { ensureAdmin } from '../controllers/contentController';
import {
  getMinistries,
  getMinistryById,
  createOrUpdateMinistry,
  editMinistry,
  deleteMinistry,
} from '../controllers/ministriesController';

const router = Router();

// Route to get all ministries
router.get('/ministries', getMinistries);

// Route to get a single ministry by ID
router.get('/ministry/:id', getMinistryById);

// Route to create a ministry
router.post('/ministry', ensureAdmin, createOrUpdateMinistry);

// Route to update a ministry
router.post('/ministry/:id', ensureAdmin, createOrUpdateMinistry);

// Route to edit (partial update) a ministry
router.patch('/ministry/:id', ensureAdmin, editMinistry);

// Route to delete a ministry
router.delete('/ministry/:id', ensureAdmin, deleteMinistry);

export default router;
