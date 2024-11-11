import dotenv from 'dotenv';

dotenv.config();

export default {
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/task-calculator',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
}; 