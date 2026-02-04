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
import useForm from "../../hooks/useForm";
import TitlePage from "../../components/TitlePage";

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
const schemaOBJ = {
  name: {
    first: Joi.string().min(2).max(10),
    middle: Joi.string().min(2).max(10),
    last: Joi.string().min(2).max(10),
  },
  phone: "",
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: "",
  image: {
    url: "",
    alt: "",
  },
  address: {
    state: Joi.string().min(2).max(10),
    country: Joi.string().min(2).max(10),
    city: Joi.string().min(2).max(10),
    street: Joi.number().required(),
    houseNumber: Joi.number().required(),
    zip: Joi.number().required(),
  },
  isBusiness: true,
};

export default function RegisterForm() {
  const { handleChange, handleSignIn, errors } = useForm(initialValues, {
    first: Joi.string().min(2).max(10),
    middle: Joi.string().min(2).allow(),
    last: Joi.string(),
  });
  return (
    <>
      <Grid
        container
        sx={{ bgcolor: "#fff", maxWidth: { md: "sm", xs: "lg" } }}
      >
        <Grid container size={12} sx={{ display: "flex" }}>
          <Grid size={{ md: 4, xs: 12 }}>
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
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="Middle Name"
                name="middle"
                onChange={handleChange}
                error={Boolean(errors.middle)}
                helperText={errors.middle}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="Last Name"
                name="last"
                onChange={handleChange}
                error={Boolean(errors.last)}
                helperText={errors.last}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="Phone"
                name="phone"
                onChange={handleChange}
                error={Boolean(errors.phone)}
                helperText={errors.pho}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
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
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="png" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="alt" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={{ md: 3, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="state" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="country" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={{ md: 5, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="city" onChange={handleChange} />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="street" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={{ md: 2, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField label="num" onChange={handleChange} />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
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
