import nextConnect from 'next-connect';
import { dbConnect, auth, ncOptions, validateBody } from 'middlewares';
import { updateUser, deleteUser } from 'controllers/user.controller';

const handler = nextConnect(ncOptions).use(dbConnect, auth);

handler.put(
    validateBody({
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 1, maxLength: 50 },
            lastname: { type: 'string', minLength: 1, maxLength: 50 },
            email: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 1, maxLength: 50 },
        },
        required: [],
        additionalProperties: false,
    }),
    (req, res) => updateUser(req, res)
);

handler.delete((req, res) => deleteUser(req, res));

export default handler;
