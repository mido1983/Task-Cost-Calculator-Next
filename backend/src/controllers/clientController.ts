import { Request, Response } from 'express';
import Client from '../models/Client';
import { asyncHandler } from '../middleware/async';

export const getClients = asyncHandler(async (req: Request, res: Response) => {
    const clients = await Client.find();
    res.status(200).json({ success: true, data: clients });
});

export const createClient = asyncHandler(async (req: Request, res: Response) => {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, data: client });
});

export const getClient = asyncHandler(async (req: Request, res: Response) => {
    const client = await Client.findById(req.params.id);
    if (!client) {
        return res.status(404).json({ success: false, message: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
}); 