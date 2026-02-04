import { useState } from "react";
import Joi from "joi";

function useForm() {
  const [userDetails, setUserDetails] = useState({
    first: "",
    middle: "",
    last: "",
  });
  const [errors, setErrors] = useState({});
  const schemaOBJ = {
    first: Joi.string().min(2).max(10),
    middle: Joi.string().min(2).allow(),
    last: Joi.string(),
  };
  const schema = Joi.object(schemaOBJ);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setUserDetails((prev) => ({ ...prev, [fieldName]: fieldValue }));
    console.log(fieldValue);

    const fieldSchema = Joi.object({
      [fieldName]: schemaOBJ[fieldName],
    });
    const { error } = fieldSchema.validate({ [fieldName]: fieldValue });

    if (error) {
      console.log(error.details[0].message);
      setErrors({ [fieldName]: error.details[0].message });
    } else {
      setErrors((prev) => {
        delete prev[fieldName];
        return prev;
      });
    }
  };

  const handleSignIn = () => {
    console.log(userDetails);
    const { error } = schema.validate(userDetails, { abortEarly: false });
    console.log(error);
  };

  return { handleChange, handleSignIn, errors };
}

export default useForm;
