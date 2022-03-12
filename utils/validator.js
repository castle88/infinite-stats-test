const Joi = require("joi");

const validator = Joi.object({
  email: string(),
  gamertag: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required(),
});

module.exports = validator;
