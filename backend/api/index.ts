import express from 'express';
import cors from 'cors';
import { connectDB } from '../src/config/database';
import { errorHandler } from '../src/middleware/error';
import authRoutes from '../src/routes/auth';
import taskRoutes from '../src/routes/tasks';
import settingsRoutes from '../src/routes/settings';
import clientRoutes from '../src/routes/clients';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/clients', clientRoutes);

// Error handling
app.use(errorHandler);

export default app; 