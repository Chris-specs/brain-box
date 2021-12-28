import nextConnect from 'next-connect';
import dbConnect from 'middlewares/config';
import { createTask, getTasks } from 'controllers/task.controller';
import { ncOptions, validateBody } from 'middlewares/validations';

dbConnect();

const handler = nextConnect(ncOptions);

handler.post(
    validateBody({
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 1 },
            content: { type: 'string' },
            user: { type: 'string' }
        },
        required: ['name', 'content'],
        additionalProperties: false,
    }),
    (req, res) => createTask(req, res)
);

handler.get((req, res) => getTasks(req, res));

export default handler;
