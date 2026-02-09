import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import { Loop } from "@mui/icons-material";

function Form({
  title = "",
  onReset,
  onSubmit,
  color,
  to = "/",
  styles = {},
  spacing = 1,
  children,
}) {
  const navigate = useNavigate();
  return (
    <Box
      disableGutters
      component="form"
      title={title}
      onSubmit={onSubmit}
      onReset={onReset}
      color={color}
      noValidate
      autoComplete="off"
      sx={{ mt: 2, ...styles }}
    >
      <Typography align="center" variant="h5" component="h1" mb={2}>
        {title.toUpperCase()}
      </Typography>
      <Grid spacing={spacing} container disableGutters>
        {children}
      </Grid>
      <Grid spacing={spacing} container size={12} sx={{ p: 0.7 }}>
        <Grid size={{ md: 6, xs: 12 }}>
          <Button
            node="cancel"
            color="error"
            variant="outlined"
            onClick={() => navigate(to)}
            fullWidth
          >
            cancel
          </Button>
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <Button
            node={<Loop />}
            variant="outlined"
            onClick={onreset}
            fullWidth
          >
            <Loop />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Form;
