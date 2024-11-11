import express from 'express';
const router = express.Router();

// Basic route placeholder
router.get('/', (req, res) => {
    res.json({ message: 'Tasks route working' });
});

export default router; 