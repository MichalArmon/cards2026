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

import useForm from "../../hooks/useForm";
import logInSchema from "../models/logInSchema";

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
    fullWidth
    margin="dense"
    sx={sx}
    error={error}
    helperText={helperText}
  />
);

export default function LoginForm({ initialValues }) {
  const { handleChange, handleSubmit, errors } = useForm(
    initialValues,
    logInSchema,
  );
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          minWidth: 300,

          bgcolor: "#ffffffff",
          flexDirection: "column",
        }}
      >
        <Grid>
          <MyTextField
            name="email"
            label="Email"
            name="email"
            onChange={handleChange}
            error={Boolean(errors.first)}
            helperText={errors.email}
            error={Boolean(errors.email)}
          />
        </Grid>

        <Grid>
          <MyTextField
            name="password"
            label="Password"
            name="password"
            onChange={handleChange}
            error={Boolean(errors.first)}
            helperText={errors.password}
            error={Boolean(errors.password)}
          />
        </Grid>

        <Grid>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Register
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
