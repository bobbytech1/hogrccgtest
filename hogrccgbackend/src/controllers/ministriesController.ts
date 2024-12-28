import { Request, Response } from 'express';
import db from '../db/knex';

// Get all ministries
export const getMinistries = async (req: Request, res: Response): Promise<void> => {
  try {
    const ministries = await db('ministries').select();
    res.status(200).json({ ministries });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Get a ministry by ID
export const getMinistryById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const ministry = await db('ministries').where({ id }).first();
    if (!ministry) {
      res.status(404).json({ message: 'Ministry not found' });
      return;
    }

    res.status(200).json({ ministry });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Create or update a ministry
export const createOrUpdateMinistry = async (req: Request, res: Response): Promise<void> => {
  const { id, title, description, image, form_link } = req.body;

  try {
    if (id) {
      // Update existing ministry
      const updatedRows = await db('ministries')
        .where({ id })
        .update({ title, description, image, form_link, updated_at: new Date() });

      if (updatedRows === 0) {
        res.status(404).json({ message: 'Ministry not found' });
        return;
      }

      res.status(200).json({ message: 'Ministry updated successfully' });
    } else {
      // Create new ministry
      const newMinistryId = await db('ministries').insert({
        title,
        description,
        image,
        form_link,
        created_at: new Date(),
        updated_at: new Date(),
      });

      res.status(201).json({ message: 'Ministry created successfully', id: newMinistryId[0] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Edit a ministry (partial update)
export const editMinistry = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRows = await db('ministries')
      .where({ id })
      .update({ ...updates, updated_at: new Date() });

    if (updatedRows === 0) {
      res.status(404).json({ message: 'Ministry not found' });
      return;
    }

    res.status(200).json({ message: 'Ministry updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Delete a ministry
export const deleteMinistry = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedRows = await db('ministries').where({ id }).del();

    if (deletedRows === 0) {
      res.status(404).json({ message: 'Ministry not found' });
      return;
    }

    res.status(200).json({ message: 'Ministry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
