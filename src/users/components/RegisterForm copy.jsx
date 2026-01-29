import { Container, Box, Typography, Paper } from "@mui/material";
import React from "react";

export default function RegisterForm() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bgcolor: "pink",
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          width: 400,
          height: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <Typography>RegisterForm</Typography>
      </Paper>
    </Box>
  );
}
