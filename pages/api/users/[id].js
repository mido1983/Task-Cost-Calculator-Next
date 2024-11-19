import { connectDB } from '../../../backend/src/config/database';
import { User } from '../../../backend/src/models/User';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    try {
        const session = await getServerSession(req, res, authOptions);
        
        console.log('Session in API:', session);
        console.log('User role:', session?.user?.role);

        if (!session) {
            return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

        if (!session?.user?.role || session.user.role !== 'admin') {
            console.log('Authorization failed:', {
                sessionExists: !!session,
                userExists: !!session?.user,
                userRole: session?.user?.role
            });
            return res.status(403).json({ 
                success: false, 
                message: 'Not authorized. Required admin role.',
                debug: {
                    sessionExists: !!session,
                    userExists: !!session?.user,
                    userRole: session?.user?.role
                }
            });
        }

        const { id } = req.query;

        switch (req.method) {
            case 'GET':
                try {
                    await connectDB();
                    const user = await User.findById(id, '-password');
                    if (!user) {
                        return res.status(404).json({ success: false, message: 'User not found' });
                    }
                    return res.status(200).json({ success: true, user });
                } catch (error) {
                    return res.status(500).json({ success: false, message: 'Server error' });
                }

            case 'PUT':
                try {
                    await connectDB();
                    const updatedUser = await User.findByIdAndUpdate(
                        id,
                        { ...req.body },
                        { new: true, runValidators: true }
                    ).select('-password');
                    
                    if (!updatedUser) {
                        return res.status(404).json({ success: false, message: 'User not found' });
                    }
                    
                    return res.status(200).json({ success: true, user: updatedUser });
                } catch (error) {
                    return res.status(500).json({ success: false, message: 'Server error' });
                }

            case 'DELETE':
                try {
                    await connectDB();
                    const deletedUser = await User.findByIdAndDelete(id);
                    if (!deletedUser) {
                        return res.status(404).json({ success: false, message: 'User not found' });
                    }
                    return res.status(200).json({ success: true, message: 'User deleted' });
                } catch (error) {
                    return res.status(500).json({ success: false, message: 'Server error' });
                }

            default:
                return res.status(405).json({ success: false, message: 'Method not allowed' });
        }
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
} 