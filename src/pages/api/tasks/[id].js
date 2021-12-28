import nextConnect from 'next-connect';
import dbConnect from 'middlewares/config';
import { updateTask, deleteTask } from 'controllers/task.controller';
import { ncOptions, validateBody } from 'middlewares/validations';

dbConnect();

const handler = nextConnect(ncOptions);

handler.put(
    validateBody({
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 1 },
            content: { type: 'string' },
        },
        required: [],
        additionalProperties: false,
    }),
    (req, res) => updateTask(req, res)
);

handler.delete((req, res) => deleteTask(req, res));

export default handler;
