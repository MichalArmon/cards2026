import { useState } from "react";
import Joi from "joi";

function useForm(initialValues, schemaOBJ, onSubmit) {
  const [formDetails, setFormDetails] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const schema = Joi.object(schemaOBJ);

  const handleChange = (event) => {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setFormDetails((prev) => ({ ...prev, [fieldName]: fieldValue }));
    console.log(fieldValue);

    const fieldSchema = Joi.object({
      [fieldName]: schemaOBJ[fieldName],
    });
    const { error } = fieldSchema.validate(
      { [fieldName]: fieldValue },
      { abortEarly: false },
    );

    if (error) {
      console.log(error.details[0].message);
      setErrors((prev) => ({ ...prev, [fieldName]: error.details[0].message }));
    } else {
      setErrors((prev) => {
        delete prev[fieldName];
        return prev;
      });
    }
  };

  const handleSubmit = () => {
    console.log(formDetails);
    const { error } = schema.validate(formDetails, { abortEarly: false });
    console.log(error);

    if (!error) {
      onSubmit(formDetails);
    }
  };

  return { handleChange, handleSubmit, errors, formDetails };
}

export default useForm;
