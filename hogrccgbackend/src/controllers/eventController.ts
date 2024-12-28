// src/controllers/eventController.ts
import { Request, Response } from 'express';
import db from '../db/knex';

// Fetch all events
export const getEvents = async (req: Request, res: Response): Promise<any> => {
    try {
      // Fetch all events from the database
      const events = await db('events').select('*');
  
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

  // Fetch a specific event by ID
export const getEventById = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
  
    try {
      // Fetch the event by ID
      const event = await db('events').where({ id }).first();
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
  
      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

// Create or update an event
export const createOrUpdateEvent = async (req: Request, res: Response): Promise<any> => {
  const { title, description, time, location, image, form_link, date } = req.body; // Get event details from request body

  try {
    // Check if the event already exists (e.g., based on title and date, or you can use another unique field)
    const existingEvent = await db('events')
      .where({ title, date })
      .first();

    if (existingEvent) {
      // If the event exists, update it
      await db('events')
        .where({ id: existingEvent.id })
        .update({ title, description, time, location, image, form_link, date });

      return res.status(200).json({ message: 'Event updated successfully' });
    } else {
      // If the event doesn't exist, create a new one
      await db('events').insert({ title, description, time, location, image, form_link, date });

      return res.status(201).json({ message: 'Event created successfully' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Edit an existing event (PATCH - Partial Update)
export const editEvent = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const updates = req.body; // Capture only the fields to be updated

  try {
    // Check if the event exists
    const event = await db('events').where({ id }).first();
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Perform partial update
    await db('events')
      .where({ id })
      .update({ ...updates, updated_at: new Date() }); // Include updated_at timestamp

    return res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};

// Delete an event
export const deleteEvent = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  try {
    const event = await db('events').where({ id }).first();
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Delete event
    await db('events').where({ id }).del();

    return res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
