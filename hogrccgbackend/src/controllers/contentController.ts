import { Request, Response, NextFunction } from 'express';
import db from '../db/knex';
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'your_access_token_secret';

export const ensureAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.cookies['access_token'] || req.headers['authorization']?.split(' ')[1];
    console.log('Token:', token);
  
    if (!token) {
      res.status(401).json({ message: 'Unauthorized: No token provided' });
      return;
    }
  
    try {
      const payload = jwt.verify(token, ACCESS_TOKEN_SECRET) as { id: string };
      console.log('Decoded Payload:', payload);
  
      const admin = await db('admin').where({ id: payload.id }).first();
      if (!admin) {
        res.status(403).json({ message: 'Forbidden: Admins only' });
        return;
      }
  
      next();
    } catch (error: any) {
      console.error('JWT Verification Error:', error.message);
      res.status(403).json({ message: 'Forbidden: Invalid or tampered token' });
    }
  };
  
  

//   Get the page content
  export const getPageContent = async (req: Request, res: Response): Promise<any> => {
    const { slug } = req.params;
  
    try {
      // Fetch page by slug
      const page = await db('pages').where({ slug }).first();
  
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }
  
      // Return the content
      return res.status(200).json({ content: JSON.parse(page.content) });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  };

  // Post new page content
export const postPageContent = async (req: Request, res: Response): Promise<any> => {
    const { slug, content } = req.body;
  
    try {
      // Check if a page with the same slug already exists
      const existingPage = await db('pages').where({ slug }).first();
      if (existingPage) {
        return res.status(400).json({ message: 'A page with this slug already exists' });
      }
  
      // Insert the new page content
      await db('pages').insert({
        slug,
        content: JSON.stringify(content),
        created_at: new Date(),
        updated_at: new Date(),
      });
  
      return res.status(201).json({ message: 'Page created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  };

// Update Page Content
export const updatePageContent = async (req: Request, res: Response): Promise<any> => {
  const { slug } = req.params;
  const { content } = req.body;

  try {
    const page = await db('pages').where({ slug }).first();
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    await db('pages')
      .where({ slug })
      .update({ content: JSON.stringify(content), updated_at: new Date() });

    return res.status(200).json({ message: 'Page updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
};
