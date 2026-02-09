import Joi from "joi";

const createCardSchema = {
  title: Joi.string().min(2).max(10),
  subTitle: Joi.string().min(2).max(10),
  description: Joi.string().min(2).max(10),

  phone: "",
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  web: "",

  image: {
    url: "",
    alt: "",
  },
  address: {
    state: Joi.string().min(2).max(10),
    country: Joi.string().min(2).max(10),
    city: Joi.string().min(2).max(10),
    street: Joi.number().required(),
    houseNumber: Joi.number().required(),
    zip: Joi.number().required(),
  },
};

export default createCardSchema;
