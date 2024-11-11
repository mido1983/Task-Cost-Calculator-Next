import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import { errorHandler } from './middleware/error';
import config from './config/config';

// Routes will be imported here
import authRoutes from './routes/auth';
import taskRoutes from './routes/tasks';
import settingsRoutes from './routes/settings';
import clientRoutes from './routes/clients';

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

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
}); 