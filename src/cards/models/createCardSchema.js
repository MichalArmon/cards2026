import Joi from "joi";

const createCardSchema = {
  title: Joi.string().min(2).max(10).required(),
  subtitle: Joi.string().min(2).max(10).required(),
  description: Joi.string().min(2).max(10).required(),

  // תיקון 1: שימוש בחוקים של Joi במקום מרכאות ריקות
  phone: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  web: Joi.string().allow(""), // מאפשר לשדה להיות ריק אם הוא לא חובה

  // תיקון 2: "השטחת" האובייקטים כדי שיתאימו לשמות השדות בטופס
  imageUrl: Joi.string().allow(""),
  imageAlt: Joi.string().allow(""),

  addressState: Joi.string().allow(""),
  addressCountry: Joi.string().min(2).max(10).required(),
  addressCity: Joi.string().min(2).max(10).required(),
  addressStreet: Joi.string().required(), // שמתי לב שכתבת קודם number, אבל רחוב הוא בדרך כלל טקסט
  addressHouseNumber: Joi.number().required(),
  addressZip: Joi.number().required(),
};

export default createCardSchema;
