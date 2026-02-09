import { Container, Typography } from "@mui/material";
import RegisterForm from "../users/components/RegisterForm";
import LoginForm from "../users/components/LoginForm";
import Joi from "joi";
function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        height: "100%",
        flexGrow: 1,
      }}
    >
      <Typography variant="h4">Login</Typography>
      <LoginForm initialValues={initialValues} />
    </Container>
  );
}

export default LoginPage;
