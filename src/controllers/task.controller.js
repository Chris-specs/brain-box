import Task from 'models/Task';

/**
 * CREATE
 */
export const createTask = async (req, res) => {
    try {

        const { id } = req.user
        const { name, content } = req.body;

        const taskFound = await Task.exists({ name });
        if (taskFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This task already exists',
            });
        }

        const newTask = await new Task({name, content, user: id});

        const saveTask = await newTask.save();
        return res.status(201).json({
            code: 201,
            status: 'success',
            message: 'Task created successfully',
            data: saveTask,
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
export const getTasks = async (req, res) => {
    try {
        const { id } = req.user

        const tasks = await Task.find({user: id}).sort({ updatedAt: -1 });
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Tasks listed successfully',
            data: tasks,
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
 * GET BY ID
 */
export const getTaskById = async (req, res) => {
    try {
        const { id } = req.query

        const task = await Task.findById(id);

        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Task listed successfully',
            data: task,
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'This task dont exists',
        });
    }
};

/**
 * UPDATE
 */
export const updateTask = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.query;

        const taskFound = await Task.exists({ _id: id });
        if (!taskFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This task dont exists',
            });
        }

        const nameFound = await Task.exists({ name });
        if (nameFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This task already exists',
            });
        }

        const updateTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Task updated successfully',
            data: updateTask,
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'This task dont exists',
        });
    }
};

/**
 * DELETE
 */
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.query;

        const taskFound = await Task.exists({ _id: id });
        if (!taskFound) {
            return res.status(400).json({
                code: 400,
                status: 'error',
                message: 'This task dont exists',
            });
        }

        await Task.findByIdAndDelete(id);
        return res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Task deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({
            code: 400,
            status: 'error',
            message: 'This task dont exists',
        });
    }
};
