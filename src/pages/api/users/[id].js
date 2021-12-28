import nextConnect from 'next-connect';
import dbConnect from 'middlewares/config';
import { updateUser, deleteUser } from 'controllers/user.controller';
import { ncOptions, validateBody } from 'middlewares/validations';

dbConnect();

const handler = nextConnect(ncOptions);

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
