const Joi = require("joi");

const userValidateSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .min(4)
    .required(),
  password: Joi.string()
    .required()
    .min(3)
    .regex(/^[a-zA-Z0-9]{3,30}$/),
  subscription: Joi.string().optional(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .min(4)
    .required(),
});

module.exports = {
  userValidateSchema,
  verifyEmailSchema,
};
