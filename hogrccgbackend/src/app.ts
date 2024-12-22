import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import db from './config/knexConfig';

// Create the Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test database connection
db.raw('SELECT 1')
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Failed to connect to the database:', err));

// Base route
app.get('/', (req: Request, res: Response) => {
  res.send('Express Server with TypeScript and Knex.js is running!');
});

export default app;
