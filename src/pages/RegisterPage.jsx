import { Container, Typography } from "@mui/material";
import RegisterForm from "../users/components/RegisterForm";

function RegisterPage() {
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
      <Typography variant="h4">Sign Up</Typography>
      <RegisterForm />
    </Container>
  );
}

export default RegisterPage;
