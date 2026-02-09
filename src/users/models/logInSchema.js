import Joi from "joi";

const logInSchema = {
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string()
    .required()
    .regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
    )
    .messages({
      "string.pattern.base": "wrong password format",
    }),
};

export default logInSchema;
