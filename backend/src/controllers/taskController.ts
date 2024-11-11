import { Request, Response } from 'express';
import Task from '../models/Task';
import Settings from '../models/Settings';
import { calculateTaskCost } from '../utils/calculations';

interface AuthRequest extends Request {
    user: {
        id: string;
    };
}

export const getTasks = async (req: AuthRequest, res: Response) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        console.error('Get tasks error:', err);
        res.status(500).json({ message: 'Failed to fetch tasks' });
    }
};

export const createTask = async (req: AuthRequest, res: Response) => {
    try {
        const { description, timeHours, timeMinutes, hourlyRate, discount, free } = req.body;
        
        const settings = await Settings.findOne({ user: req.user.id });
        if (!settings) {
            return res.status(400).json({ message: 'User settings not found' });
        }

        const task = new Task({
            user: req.user.id,
            description,
            timeHours: Number(timeHours) || 0,
            timeMinutes: Number(timeMinutes) || 0,
            hourlyRate: Number(hourlyRate) || settings.hourlyRate,
            discount: Number(discount) || 0,
            free: Boolean(free),
            currency: settings.currency,
            cost: calculateTaskCost({ 
                timeHours, 
                timeMinutes, 
                hourlyRate, 
                discount, 
                free 
            }, settings)
        });

        await task.save();
        res.json(task);
    } catch (err) {
        console.error('Create task error:', err);
        res.status(500).json({ message: 'Failed to create task' });
    }
};

export const updateTask = async (req: AuthRequest, res: Response) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        const settings = await Settings.findOne({ user: req.user.id });
        if (!settings) return res.status(400).json({ message: 'User settings not found' });

        const updatedTask = { ...task.toObject(), ...req.body };
        updatedTask.cost = calculateTaskCost(updatedTask, settings);

        const result = await Task.findByIdAndUpdate(
            req.params.id,
            updatedTask,
            { new: true }
        );

        res.json(result);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
    try {
        const task = await Task.findOneAndDelete({ 
            _id: req.params.id, 
            user: req.user.id 
        });
        
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const duplicateTask = async (req: AuthRequest, res: Response) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
        if (!task) return res.status(404).json({ message: 'Task not found' });

        const newTask = new Task({
            ...task.toObject(),
            _id: undefined,
            user: req.user.id,
            createdAt: new Date()
        });

        await newTask.save();
        res.json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
}; 