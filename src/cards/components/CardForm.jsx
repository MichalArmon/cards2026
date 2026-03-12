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

import createCardSchema from "../models/CreateCardSchema";
import { useCard } from "../providers/CardProvider";

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

function CardForm({ initialValues, handleSubmitForForm, buttonText }) {
  const { handleSubmit, handleChange, errors, formDetails } = useForm(
    initialValues,
    createCardSchema,
    handleSubmitForForm,
  );
  const { card } = useCard();
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
              value={formDetails.title}
            />
          </Item>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="Subtitle"
              name="subtitle"
              onChange={handleChange}
              error={Boolean(errors.subtitle)}
              helperText={errors.subtitle}
              value={formDetails.subtitle}
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
              value={formDetails.description}
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
              helperText={errors.phone}
              value={formDetails.phone}
            />
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="Email"
              name="email"
              onChange={handleChange}
              error={Boolean(errors.email)}
              value={formDetails.email}
              helperText={errors.email}
            />
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="Web"
              onChange={handleChange}
              error={Boolean(errors.web)}
              value={formDetails.web}
              helperText={errors.web}
              name="web"
            />
          </Item>
        </Grid>
      </Grid>

      <Grid container size={12} onChange={handleChange}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="png"
              onChange={handleChange}
              error={Boolean(errors.imageUrl)}
              value={formDetails.imageUrl}
              helperText={errors.imageUrl}
              name="imageUrl"
            />
          </Item>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="alt"
              onChange={handleChange}
              error={Boolean(errors.imageAlt)}
              value={formDetails.imageAlt}
              helperText={errors.imageAlt}
              name="imageAlt"
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container size={12}>
        <Grid size={{ md: 3, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="state"
              onChange={handleChange}
              error={Boolean(errors.addressState)}
              value={formDetails.addressState}
              helperText={errors.addressState}
              name="addressState"
            />
          </Item>
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="country"
              onChange={handleChange}
              error={Boolean(errors.addressCountry)}
              value={formDetails.addressCountry}
              helperText={errors.addressCountry}
              name="addressCountry"
            />
          </Item>
        </Grid>
        <Grid size={{ md: 5, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="city"
              onChange={handleChange}
              error={Boolean(errors.addressCity)}
              value={formDetails.addressCity}
              helperText={errors.addressCity}
              name="addressCity"
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container size={12}>
        <Grid size={{ md: 4, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="street"
              onChange={handleChange}
              error={Boolean(errors.addressStreet)}
              value={formDetails.addressStreet}
              helperText={errors.addressStreet}
              name=" addressStreet"
            />
          </Item>
        </Grid>
        <Grid size={{ md: 2, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="num"
              onChange={handleChange}
              error={Boolean(errors.addressHouseNumber)}
              value={formDetails.addressHouseNumber}
              helperText={errors.addressHouseNumber}
              name="addressHouseNumber"
            />
          </Item>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Item>
            {" "}
            <MyTextField
              label="ZIP"
              onChange={handleChange}
              error={Boolean(errors.addressZip)}
              value={formDetails.addressZip}
              helperText={errors.addressZip}
              name=" addressZip"
            />
          </Item>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Item>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            {buttonText}
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
}

export default CardForm;
