import express from 'express';
import cors from 'cors';
import { connectDB } from '../src/config/database';
import authRoutes from './routes/auth';
import { User } from './models/User';

const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token'],
    credentials: true
}));

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Исключаем пароль из результата
        res.json({
            message: 'Список всех пользователей',
            users
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error while fetching users' });
    }
});
app.use('/api/auth', authRoutes);

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app; 