import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().required(),
    company: Joi.string().required(),
});

export default { create };