// src/routes/eventRoutes.ts
import { Router } from 'express';
import { ensureAdmin } from '../controllers/contentController';
import { createOrUpdateEvent, editEvent, deleteEvent, getEvents, getEventById } from '../controllers/eventController';

const router = Router();

// Route to create or update an event (only accessible to admin)
router.post('/events/add', ensureAdmin, createOrUpdateEvent);

// Route to edit an existing event (only accessible to admin)
router.patch('/events/:id', ensureAdmin, editEvent);

// Route to delete an event (only accessible to admin)
router.delete('/events/:id', ensureAdmin, deleteEvent);

// Route to get all events (accessible to everyone)
router.get('/events', getEvents);

// Route to get a specific event by ID (accessible to everyone)
router.get('/events/:id', getEventById);

export default router;
