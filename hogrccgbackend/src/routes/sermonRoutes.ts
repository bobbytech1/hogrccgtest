import { Router } from 'express';
import { ensureAdmin } from '../controllers/contentController';
import {
  getSermons,
  getSermonById,
  createOrUpdateSermon,
  editSermon,
  deleteSermon,
} from '../controllers/sermonController';

const router = Router();

// Route to get all sermons
router.get('/sermon', getSermons);

// Route to get a single sermon by ID
router.get('/sermon/:id', getSermonById);

// Route to create a sermon
router.post('/sermon', ensureAdmin, createOrUpdateSermon);

//Route to update sermon
router.post('/sermon/:id', ensureAdmin, createOrUpdateSermon);

// Route to edit (partial update) a sermon
router.patch('/sermon/:id', ensureAdmin, editSermon);

// Route to delete a sermon
router.delete('/sermon/:id', ensureAdmin, deleteSermon);

export default router;
