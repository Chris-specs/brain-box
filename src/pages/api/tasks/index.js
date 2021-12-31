import nextConnect from 'next-connect';
import { dbConnect, auth, ncOptions, validateBody } from 'middlewares';
import { createTask, getTasks } from 'controllers/task.controller';


const handler = nextConnect(ncOptions).use(dbConnect, auth)

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
