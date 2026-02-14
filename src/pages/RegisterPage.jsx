import { Container, Typography, TextField } from "@mui/material";

import RegisterComponent from "../users/components/RegisterComponent";

function RegisterPage() {
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
      <RegisterComponent />
    </Container>
  );
}

export default RegisterPage;
