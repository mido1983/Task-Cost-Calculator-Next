import express from 'express';
import { connectDB } from './config/database';
import config from './config/config';
import { User } from './models/User';

const app = express();

// Middleware для парсинга JSON
app.use(express.json());

// Тестовые маршруты
app.get('/', (req, res) => {
  res.json({ 
    message: 'Добро пожаловать в API Task Cost Calculator!',
    status: 'работает'
  });
});

// Обновленный тестовый маршрут
app.get('/api/test', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json({
      success: true,
      count: users.length,
      users
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении пользователей',
      error: error.message
    });
  }
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      console.log(`✅ Сервер запущен на порту ${config.port}`);
    });
  } catch (error) {
    console.error('Ошибка запуска сервера:', error);
    process.exit(1);
  }
};

startServer(); 