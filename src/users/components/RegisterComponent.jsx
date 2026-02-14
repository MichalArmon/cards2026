import { Box, Button, Grid, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";

import useForm from "../../hooks/useForm";
import registerSchema from "../models/registerSchema";
import axios from "axios";
import initialRegisterValues from "../helpers/initialValues/initialRegisterValues";
import normalizeUser from "../helpers/normalization/normalizeUser";

const handleSubmitRegister = async (data) => {
  const userDetailsForServer = normalizeUser(data);

  try {
    const response = await axios.post(
      "https://cardsserver-8uqn.onrender.com/users",
      userDetailsForServer,
    );
    console.log(response);
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      alert(error.response.data);
    }
  }
};

function RegisterComponent() {
  const { handleSubmit, handleChange, errors, formDetails } = useForm(
    initialRegisterValues,
    registerSchema,
    handleSubmitRegister,
  );
  return (
    <Grid
      container
      sx={{
        width: "60vw",
        // bgcolor: "primary.main",
        borderRadius: 3,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <Grid container size={{ md: 4, xs: 12 }}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            px: 4,
            justifyContent: "center",

            color: "white",
            backgroundImage:
              "linear-gradient(45deg, #7a5cd6cc 30%, #21CBF3 90%),url('/businesscards-tileimage-1x1.jpg')",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ pt: 2, textAlign: "center", fontWeight: 800 }}
            >
              Sign Up!
            </Typography>
            <Typography
              variant="body1"
              sx={{ p: 2, textAlign: "center", lineHeight: 2 }}
            >
              Enter your personal details and start the journey with us.
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                borderRadius: 9,
                px: 2,
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
                  transform: "scale(1.02)",
                  borderWidth: 0,
                  fontWeight: 700,
                },
              }}
              variant="outlined"
              color="white"
              size="large"
              onClick={handleSubmit}
              fullWidth
            >
              REGISTER
            </Button>
          </Box>
          <Typography
            variant="body1"
            sx={{ p: 2, textAlign: "center", lineHeight: 2, fontSize: 14 }}
          >
            <strong style={{ fontSize: "20px" }}>or </strong> Have an account ?{" "}
            <Button sx={{ color: "white" }}>Login</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid container size={{ md: 8, xs: 12 }}>
        <RegisterForm
          handleChange={handleChange}
          errors={errors}
          formDetails={formDetails}
        />
      </Grid>
    </Grid>
  );
}

export default RegisterComponent;
