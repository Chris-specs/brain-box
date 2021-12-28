import nextConnect from 'next-connect';
import dbConnect from 'middlewares/config';
import { authUser } from 'controllers/auth.controller';
import { ncOptions, validateBody } from 'middlewares/validations';

dbConnect();

const handler = nextConnect(ncOptions);

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
