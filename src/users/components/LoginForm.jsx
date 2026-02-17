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
import Form from "../../form/components/Form";
import useForm from "../../hooks/useForm";
import logInSchema from "../models/logInSchema";
import axios from "axios";
import initialLoginValues from "../helpers/initialValues/initialLoginValues";
import { useUser } from "../providers/UserProvider";
import {
  getUser,
  setTokenInLocalStorage,
} from "../../services/localStorageService";
import { useEffect } from "react";

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
  value,
  type,
  ...props
}) => (
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
    type={type}
    value={value}
  />
);

export default function LoginForm() {
  const { user, setUser, token, setToken } = useUser();
  const handleSubmitLogin = async (user1) => {
    console.log(user1);

    try {
      const response = await axios.post(
        "https://cardsserver-8uqn.onrender.com/users/login",
        user1,
      );
      console.log(response.data);
      setTokenInLocalStorage(response.data);
      setToken(response.data);
      const decodedUser = getUser();
      setUser(decodedUser);
    } catch (error) {
      console.log(error);
      alert("The login failed");
    }
  };
  const { handleChange, handleSubmit, errors, formDetails } = useForm(
    initialLoginValues,
    logInSchema,
    handleSubmitLogin,
  );

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: 150,
            backgroundImage:
              "linear-gradient(45deg, #7a5cd6cc 30%, #21CBF3 90%),url('/businesscards-tileimage-1x1.jpg')",
          }}
        ></Box>
        <Form
          title="Login"
          styles={{ padding: 2 }}
          align={"start"}
          titleSize={"16px"}
          handleSubmit={handleSubmit}
        >
          <Grid
            container
            spacing={1.5}
            sx={{
              p: 0.7,
              minWidth: 300,
              bgcolor: "#ffffffff",
              flexDirection: "column",
            }}
          >
            <Grid>
              <MyTextField
                size="small"
                name="email"
                label="Email"
                onChange={handleChange}
                helperText={errors.email}
                error={Boolean(errors.email)}
                value={formDetails.email}
              />
            </Grid>
            <Grid>
              <MyTextField
                type="password"
                size="small"
                name="password"
                label="Password"
                onChange={handleChange}
                helperText={errors.password}
                error={Boolean(errors.password)}
                value={formDetails.password}
              />
            </Grid>
            <Grid>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </>
  );
}
