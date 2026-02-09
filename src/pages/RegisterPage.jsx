import { Container, Typography, TextField } from "@mui/material";
import RegisterForm from "../users/components/RegisterForm";
import TitlePage from "../components/TitlePage";
import RegisterComponent from "../users/components/RegisterComponent";
import Joi from "joi";
import styled from "@emotion/styled";

function RegisterPage() {
  const MyTextField = ({
    label,
    onChange,
    sx,
    error,
    helperText,
    type,
    ...props
  }) => (
    <TextField
      {...props}
      onChange={onChange}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      margin="normal"
      sx={sx}
      error={error}
      helperText={helperText}
      type={type}
    />
  );

  const initialValues = {
    name: {
      first: "",
      middle: "",
      last: "",
    },
    phone: "",
    email: "",
    password: "",
    image: {
      url: "",
      alt: "",
    },
    address: {
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zip: "",
    },
    isBusiness: true,
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        height: "100%",
        flexGrow: 1,
      }}
    >
      <RegisterComponent initialValues={initialValues} />
    </Container>
  );
}

export default RegisterPage;
