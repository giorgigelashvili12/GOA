import csrf from 'csurf';
import cookieParser from 'cookie-parser';
const csrfProtection = csrf({
    cookie: {
        httpOnly: true,
        //secure: process.env.NODE_ENV === 'production', // update before production
        sameSite: 'strict',
        key: '_csrf',
        path: '/'
    }
});
export const csrfToken = [
    cookieParser(),
    (req, res, next) => {
        if (['GET', 'HEAD', 'OPTIONS'].includes(req.method) ||
            req.headers['authorization']) {
            return next();
        }
        csrfProtection(req, res, next);
    }
];
