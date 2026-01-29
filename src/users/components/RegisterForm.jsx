import { Container, Typography, Paper, TextField } from "@mui/material";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import React from "react";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "stretch",
  flexDirection: "column",
  gap: 10,

  border: "1px solid",
  borderColor: "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

export default function RegisterForm() {
  return (
    <>
      <Grid container spacing={2} sx={{ width: "80vw" }}>
        <Grid size={4}>
          <Item>
            <TextField fullWidth />
            <TextField fullWidth />
            <TextField fullWidth />
            <TextField fullWidth />
          </Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </>
  );
}
