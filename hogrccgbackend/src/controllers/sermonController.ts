import { Request, Response } from 'express';
import db from '../db/knex';

// Get all sermons
export const getSermons = async (req: Request, res: Response): Promise<void> => {
  try {
    const sermons = await db('sermons').select();
    res.status(200).json({ sermons });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Get a sermon by ID
export const getSermonById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const sermon = await db('sermons').where({ id }).first();
    if (!sermon) {
      res.status(404).json({ message: 'Sermon not found' });
      return;
    }

    res.status(200).json({ sermon });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Create or update a sermon
export const createOrUpdateSermon = async (req: Request, res: Response): Promise<void> => {
  const { id, title, category, content, image, video, speaker, date } = req.body;

  try {
    if (id) {
      // Update existing sermon
      const updatedRows = await db('sermons')
        .where({ id })
        .update({ title, category, content, image, video, speaker, date, updated_at: new Date() });

      if (updatedRows === 0) {
        res.status(404).json({ message: 'Sermon not found' });
        return;
      }

      res.status(200).json({ message: 'Sermon updated successfully' });
    } else {
      // Create new sermon
      const newSermonId = await db('sermons').insert({
        title,
        category,
        content,
        image,
        video,
        speaker,
        date,
        created_at: new Date(),
        updated_at: new Date(),
      });

      res.status(201).json({ message: 'Sermon created successfully', id: newSermonId[0] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Edit a sermon (partial update)
export const editSermon = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRows = await db('sermons')
      .where({ id })
      .update({ ...updates, updated_at: new Date() });

    if (updatedRows === 0) {
      res.status(404).json({ message: 'Sermon not found' });
      return;
    }

    res.status(200).json({ message: 'Sermon updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Delete a sermon
export const deleteSermon = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedRows = await db('sermons').where({ id }).del();

    if (deletedRows === 0) {
      res.status(404).json({ message: 'Sermon not found' });
      return;
    }

    res.status(200).json({ message: 'Sermon deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
