const Joi = require('joi');

const loginSchema = Joi.array().items(
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': 'BAD_REQUEST&"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': 'BAD_REQUEST&"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': 'BAD_REQUEST&"password" length must be at least 6 characters long',
    }),
    image: Joi.string().required().messages({
      'string.base': 'BAD_REQUEST&"image" must be a string',
    }),
  }),
);

module.exports = loginSchema;