import { Container, Typography } from "@mui/material";

import LoginForm from "../users/components/LoginForm";

function LoginPage() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        height: "100%",
        flexGrow: 1,
      }}
    >
      <LoginForm />
    </Container>
  );
}

export default LoginPage;
