import { Box, Card } from "@mui/material";
import React from "react";

export default function Main({ children }) {
  return (
    <Box
      sx={{
        minHeight: "85vh",
        paddingTop: 15,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        gap: 3,
      }}
    >
      {children}
    </Box>
  );
}
