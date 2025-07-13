import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        res.status(401).json({ msg: 'Unauthorized' });
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT);
        req.user = decoded;
        next();
    }
    catch (e) {
        res.status(401).json({ msg: 'Unauthorized' });
    }
};
export default authMiddleware;
