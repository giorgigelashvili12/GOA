import jwt from 'jsonwebtoken';
import {User} from '../models/user.model.js';

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            req.status(401).json({msg: 'Not authorized'});
        }

        const decoded = jwt.verify(token, process.env.KEY);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch(e) {
        res.status(500).json({msg: 'Authentication error'});
    }
}