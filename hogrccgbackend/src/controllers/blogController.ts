import { Request, Response } from 'express';
import db from '../db/knex';

// Get all blogs
export const getBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await db('blogs').select();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Get a blog by ID
export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const blog = await db('blogs').where({ id }).first();
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }

    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Create or update a blog
export const createOrUpdateBlog = async (req: Request, res: Response): Promise<void> => {
  const { id, title, content, image, author, published_at } = req.body;

  try {
    if (id) {
      // Update existing blog
      const updatedRows = await db('blogs')
        .where({ id })
        .update({ title, content, image, author, published_at, updated_at: new Date() });

      if (updatedRows === 0) {
        res.status(404).json({ message: 'Blog not found' });
        return;
      }

      res.status(200).json({ message: 'Blog updated successfully' });
    } else {
      // Create new blog
      const newBlogId = await db('blogs').insert({
        title,
        content,
        image,
        author,
        published_at,
        created_at: new Date(),
        updated_at: new Date(),
      });

      res.status(201).json({ message: 'Blog created successfully', id: newBlogId[0] });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Edit a blog (partial update)
export const editBlog = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedRows = await db('blogs')
      .where({ id })
      .update({ ...updates, updated_at: new Date() });

    if (updatedRows === 0) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }

    res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};

// Delete a blog
export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedRows = await db('blogs').where({ id }).del();

    if (deletedRows === 0) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
};
