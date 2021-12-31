import nextConnect from 'next-connect';
import { dbConnect, ncOptions, validateBody } from 'middlewares';
import { authUser } from 'controllers/auth.controller';

const handler = nextConnect(ncOptions).use(dbConnect);

handler.post(
    validateBody({
        type: 'object',
        properties: {
            email: { type: 'string', format: 'email' },
            password: { type: 'string', minLength: 1, maxLength: 50 },
        },
        required: ['email', 'password'],
        additionalProperties: false,
    }),
    (req, res) => authUser(req, res)
);

export default handler;
