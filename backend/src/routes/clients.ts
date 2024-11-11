import express from 'express';
import { getClients, createClient, getClient } from '../controllers/clientController';
import { protect } from '../middleware/auth';
const router = express.Router();

router.use(protect); // Защищаем все маршруты

router.route('/')
    .get(getClients)
    .post(createClient);

router.route('/:id')
    .get(getClient);

export default router; 