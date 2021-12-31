import nextConnect from 'next-connect';
import { dbConnect, auth, ncOptions, validateBody } from 'middlewares';
import { updateTask, deleteTask } from 'controllers/task.controller';

const handler = nextConnect(ncOptions).use(dbConnect, auth);

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
