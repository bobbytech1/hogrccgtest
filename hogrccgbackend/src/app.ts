import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import db from './db/knex';
import authRoutes from './routes/authRoute';
import adminRoutes from './routes/adminRoute';

// Create the Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test database connection when the server starts
db.raw('SELECT 1') // A simple query to test the connection
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error.message);
  });


  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/admin', adminRoutes);
  

// Base route
app.get('/', (req: Request, res: Response) => {
  res.send('Express Server with TypeScript and Knex.js is running!');
});

export default app;
