import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(401).json({
                code: 401,
                status: 'error',
                message: 'Unauthorized',
            });
        }

        const token = authorization.split(' ')[1];

        const validToken = jwt.verify(token, process.env.SECRET_STRING); 
        req.user = validToken.user;
        next();
    } catch (error) {
        res.status(401).json({
            code: 401,
            status: 'error',
            message: 'Invalid token',
        });
    }
};
export default auth;
