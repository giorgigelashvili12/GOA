import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

interface JwtPayload {
    id: string;
    email: string;
}

interface AuthnedReq extends Request {
    user?: JwtPayload;
}

const authMiddleware = (req: AuthnedReq, res: Response, next: NextFunction): void => {
    const token = req.cookies?.hs || req.headers.authorization?.split(' ')[1];

    if(!token) {
        res.status(401).json({msg: 'Unauthorized'});
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT as string) as JwtPayload;
        req.user = decoded;
        next();
    } catch(e: unknown) {
        res.status(401).json({msg: 'Unauthorized'});
    }
}

export default authMiddleware;