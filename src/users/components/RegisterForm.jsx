import { Close, Loop } from "@mui/icons-material";
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

import TitlePage from "../../components/TitlePage";
import { margin } from "@mui/system";

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
    sx={{ ...sx, marginBottom: 2 }}
    error={error}
    helperText={helperText}
    type={type}
  />
);

export default function RegisterForm({ handleChange, errors }) {
  return (
    <>
      <Grid container sx={{ bgcolor: "#fff", p: 2 }}>
        <Grid container size={12} sx={{ display: "flex" }}>
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              <MyTextField
                label="First Name"
                name="first"
                onChange={handleChange}
                error={Boolean(errors.first)}
                helperText={errors.first}
                required
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
                required
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
                type="tel"
                required
              />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="Email"
                name="email"
                onChange={handleChange}
                type="email"
                error={Boolean(errors.email)}
                helperText={errors.email}
                required
              />
            </Item>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Item>
            <MyTextField
              label="Password"
              name="password"
              onChange={handleChange}
              type="password"
              required
              error={Boolean(errors.password)}
              helperText={errors.password}

              // sx={{ "& .MuiOutlinedInput-root": { borderRadius: 5 } }}
            />
          </Item>
        </Grid>
        <Grid container size={12} onChange={handleChange}>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="png"
                onChange={handleChange}
                name="png"
                error={Boolean(errors.png)}
                helperText={errors.png}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="alt"
                onChange={handleChange}
                name="alt"
                error={Boolean(errors.alt)}
                helperText={errors.alt}
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
                name="state"
                onChange={handleChange}
                error={Boolean(errors.state)}
                helperText={errors.state}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="country"
                onChange={handleChange}
                name="country"
                error={Boolean(errors.country)}
                helperText={errors.country}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 5, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="city"
                name="city"
                onChange={handleChange}
                error={Boolean(errors.city)}
                helperText={errors.city}
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
                name="street"
                error={Boolean(errors.street)}
                helperText={errors.street}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 2, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="num"
                onChange={handleChange}
                name="houseNumber"
                error={Boolean(errors.houseNumber)}
                helperText={errors.houseNumber}
              />
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              {" "}
              <MyTextField
                label="ZIP"
                onChange={handleChange}
                name="zip"
                error={Boolean(errors.zip)}
                helperText={errors.zip}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              <Button variant="outlined" fullWidth size="lg" color="error">
                Cancel
              </Button>
            </Item>
          </Grid>
          <Grid size={{ md: 6, xs: 12 }}>
            <Item>
              <Button
                variant="outlined"
                fullWidth
                // sx={{ color: "text.primary" }}
              >
                <Loop />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
