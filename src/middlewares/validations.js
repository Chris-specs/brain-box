import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export const ncOptions = {
    onError: (err, req, res, next) => {
        res.status(500).json({
            code: 500,
            status: 'error',
            message: 'Internal server error',
        });
    },
    onNoMatch: (req, res, next) => {
        res.status(405).json({
            code: 405,
            status: 'error',
            message: 'Method not allowed',
        });
    },
};

export const validateBody = (schema) => {
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    return (req, res, next) => {
        const valid = validate(req.body);

        if (valid) {
            return next();
        } else {
            const errors = validate.errors.map((error) => {
                return {
                    field:
                        error.instancePath != ''
                            ? error.instancePath.substring(1)
                            : error.params.missingProperty,
                    message:
                        error.message[0].toUpperCase() +
                        error.message.substring(1),
                };
            });
            return res.status(400).json({
                code: 400,
                status: 'error',
                errors,
            });
        }
    };
};
