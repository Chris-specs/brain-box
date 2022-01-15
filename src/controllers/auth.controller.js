import User from 'models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * AUTH
 */
export const authUser = async (req, res) => {
    try {
        let { email, password } = req.body;

        const userFound = await User.findOne({ email }, '+password');
        if (!userFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This user dont exists',
            });
        }

        const validPassword = await bcrypt.compare(
            password,
            userFound.password
        );
        if (!validPassword) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This password is incorrect',
            });
        }

        const payload = {
            user: {
                id: userFound.id,
            },
        };

        jwt.sign(payload, process.env.SECRET_STRING, (error, token) => {
            if (error) throw error;

            const { password, ...user } = userFound._doc;

            const data = user;

            return res.status(200).json({
                code: 200,
                status: 'success',
                message: 'Login success',
                data,
                token
            });
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'error',
            message: 'Internal server error',
        });
    }
};
