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

export default function LoginForm() {
  const { handleChange, handleSignIn, errors } = useForm();
  return (
    <>
      <Grid
        container
        sx={{ width: "40vw", bgcolor: "#fff", flexDirection: "column" }}
      >
        <Item>
          <MyTextField
            label="Email"
            name="email"
            onChange={handleChange}
            error={Boolean(errors.first)}
            helperText={errors.first}
          />
        </Item>

        <Item>
          <MyTextField
            label="Password"
            name="password"
            onChange={handleChange}
            error={Boolean(errors.first)}
            helperText={errors.first}
          />
        </Item>

        <Item>
          <Button variant="contained" fullWidth onClick={handleSignIn}>
            Register
          </Button>
        </Item>
      </Grid>
    </>
  );
}
