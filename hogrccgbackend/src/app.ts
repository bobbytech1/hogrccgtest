import express, { Application, Request, Response } from 'express';
import cors from 'cors';

// Create the Express app
const app: Application = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Base route
app.get('/', (req: Request, res: Response) => {
  res.send('Express Server with TypeScript is running!');
});

export default app;
