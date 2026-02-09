import { Close } from "@mui/icons-material";
import {
  Container,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import Joi from "joi";

import useForm from "../../hooks/useForm";
import TitlePage from "../../components/TitlePage";
import createCardSchema from "../models/CreateCardSchema";

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

const MyTextField = ({
  label,
  onChange,
  sx,
  error,
  helperText,
  type,
  ...props
}) => (
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
    type={type}
  />
);

const initialValues = {
  title: "",
  subTitle: "",
  description: "",
  phone: "",
  email: "",

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
};

function CardForm() {
  const { handleChange, handleSignIn, errors } = useForm(
    initialValues,
    createCardSchema,
  );
  return (
    <Grid container sx={{ bgcolor: "#fff", maxWidth: { md: "sm", xs: "lg" } }}>
      <Grid container size={12} sx={{ display: "flex" }}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            <MyTextField
              label="Title"
              name="title"
              onChange={handleChange}
              error={Boolean(errors.title)}
              helperText={errors.title}
            />
          </Item>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="Subtitle"
              name="subTitle"
              onChange={handleChange}
              error={Boolean(errors.subTitle)}
              helperText={errors.subTitle}
            />
          </Item>
        </Grid>
        <Grid size={{ md: 12, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="Description"
              name="description"
              onChange={handleChange}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container size={12}>
        <Grid size={{ md: 4, xs: 12 }}>
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
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField label="Email" onChange={handleChange} />
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField label="Web" onChange={handleChange} />
          </Item>
        </Grid>
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
            Create Card
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
}

export default CardForm;
