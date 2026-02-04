import { Close } from "@mui/icons-material";
import {
  Container,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import Joi from "joi";
import React, { useState } from "react";
import useForm from "../hooks/useForm";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  display: "flex",

  //   border: "1px solid",
  borderColor: "#ced7e0",
  padding: theme.spacing(0.7),

  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

const MyTextField = ({ label, onChange, sx, error, helperText, ...props }) => (
  <TextField
    {...props}
    onChange={onChange}
    label={label}
    variant="outlined"
    size="small"
    fullWidth
    margin="dense"
    sx={sx}
    error={error}
    helperText={helperText}
  />
);

export default function RegisterForm() {
  const { handleChange, handleSignIn, errors } = useForm();
  return (
    <>
      <Grid container sx={{ width: "40vw", bgcolor: "#fff" }}>
        <Grid container size={12} sx={{ display: "flex" }}>
          <Grid size={4}>
            <Item>
              <MyTextField
                label="First Name"
                name="first"
                onChange={handleChange}
                error={Boolean(errors.first)}
                helperText={errors.first}
              />
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              {" "}
              <MyTextField
                label="Middle Name"
                name="middle"
                onChange={handleChange}
              />
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              {" "}
              <MyTextField
                label="Last Name"
                name="last"
                onChange={handleChange}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={6}>
            <Item>
              {" "}
              <MyTextField label="Phone" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              {" "}
              <MyTextField label="Email" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Item>
            <MyTextField
              label="Password"
              onChange={handleChange}
              // sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
            />
          </Item>
        </Grid>
        <Grid container size={12} onChange={handleChange}>
          <Grid size={6}>
            <Item>
              {" "}
              <MyTextField label="png" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              {" "}
              <MyTextField label="alt" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={3}>
            <Item>
              {" "}
              <MyTextField label="state" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={4}>
            <Item>
              {" "}
              <MyTextField label="country" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={5}>
            <Item>
              {" "}
              <MyTextField label="city" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={4}>
            <Item>
              {" "}
              <MyTextField label="street" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={2}>
            <Item>
              {" "}
              <MyTextField label="num" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={6}>
            <Item>
              {" "}
              <MyTextField label="ZIP" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Item>
            <Button variant="contained" fullWidth onClick={handleSignIn}>
              Register
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
