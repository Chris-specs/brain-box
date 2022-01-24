import nextConnect from 'next-connect';
import { dbConnect, auth, ncOptions, validateBody } from 'middlewares';
import { createUser, getUsers } from 'controllers/user.controller';

const handler = nextConnect(ncOptions).use(dbConnect);

handler.post(
    validateBody({
        type: 'object',
        properties: {
            name: { type: 'string', minLength: 1, maxLength: 50 },
            lastname: { type: 'string', minLength: 1, maxLength: 50 },
            email: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 1, maxLength: 50 },
        },
        required: ['name', 'lastname', 'email', 'password'],
        additionalProperties: false,
    }),
    (req, res) => createUser(req, res)
);

handler.get(auth, (req, res) => getUsers(req, res));

export default handler;
