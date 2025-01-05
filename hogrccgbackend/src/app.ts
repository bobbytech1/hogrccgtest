import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './db/knex';
import authRoutes from './routes/authRoute';
import adminRoutes from './routes/adminRoute';
import contentRoutes from './routes/contentRoutes';
import eventRoutes from './routes/eventRoutes';
import blogRoutes from './routes/blogRoutes';
import sermonRoutes from './routes/sermonRoutes';
import ministryRoutes from './routes/ministryRoutes';

// Create the Express app
const app: Application = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow cookies to be sent across origins
};
app.use(cors(corsOptions));


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
  app.use('/api/admin', adminRoutes, contentRoutes, eventRoutes, blogRoutes, sermonRoutes, ministryRoutes);
  
 

// Base route
app.get('/', (req: Request, res: Response) => {
  res.send('Express Server with TypeScript and Knex.js is running!');
});

export default app;
