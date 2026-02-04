import { Container, Typography } from "@mui/material";
import RegisterForm from "../users/components/RegisterForm";
import TitlePage from "../components/TitlePage";

function RegisterPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        height: "100%",
        flexGrow: 1,
      }}
    >
      <TitlePage Children="Sign Up" />
      <RegisterForm />
    </Container>
  );
}

export default RegisterPage;
