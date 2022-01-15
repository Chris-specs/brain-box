import User from 'models/User';
import bcrypt from 'bcryptjs';

/**
 * CREATE
 */
export const createUser = async (req, res) => {
    try {
        let { name, lastname, email, password } = req.body;

        const userFound = await User.exists({ email });
        if (userFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This email already exists',
            });
        }

        const salt = await bcrypt.genSalt(10);

        password = await bcrypt.hash('test', salt);

        const newUser = await new User({ name, lastname, email, password });

        const saveUser = await newUser.save();
        return res.status(201).json({
            code: 201,
            status: 'success',
            message: 'User created successfully',
            data: saveUser,
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'error',
            message: 'Internal server error',
        });
    }
};

/**
 * GET
 */
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Users listed successfully',
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            code: 500,
            status: 'error',
            message: 'Internal server error',
        });
    }
};

/**
 * UPDATE
 */
export const updateUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        const { id } = req.query;

        const userFound = await User.exists({ _id: id });
        if (!userFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This user dont exists',
            });
        }

        const emailFound = await User.exists({ email });
        if (emailFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This email already exists',
            });
        }

        const salt = await bcrypt.genSalt(10);

        if (password) {
            password = await bcrypt.hash(password, salt);
        }

        const updateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'User updated successfully',
            data: updateUser,
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'This user dont exists',
        });
    }
};

/**
 * DELETE
 */
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.query;

        const userFound = await User.exists({ _id: id });
        if (!userFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This user dont exists',
            });
        }

        await User.findByIdAndDelete(id);
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'User deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'This user dont exists',
        });
    }
};
