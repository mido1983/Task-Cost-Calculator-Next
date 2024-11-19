import { connectDB } from '../../../backend/src/config/database';
import { User } from '../../../backend/src/models/User';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    
    console.log('API Session:', {
        exists: !!session,
        user: session?.user,
        role: session?.user?.role
    });

    if (!session || session.user.role !== 'admin') {
        return res.status(403).json({ 
            success: false, 
            message: 'Not authorized',
            debug: {
                sessionExists: !!session,
                userExists: !!session?.user,
                userRole: session?.user?.role
            }
        });
    }

    if (req.method === 'GET') {
        try {
            await connectDB();
            const users = await User.find({}, '-password');
            return res.status(200).json({ success: true, users });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error' });
        }
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' });
} 