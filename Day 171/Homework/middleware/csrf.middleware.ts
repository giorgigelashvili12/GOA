import {Request, Response, NextFunction} from 'express';
import csrf from 'csurf';

const csrfProtection = csrf({
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    }
});

export const csrfToken = [
    csrfProtection,
    (req: Request, res: Response, next: NextFunction) => {
        if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
            res.cookie('XSRF-TOKEN', req.csrfToken());
        }
        next();
    },
]