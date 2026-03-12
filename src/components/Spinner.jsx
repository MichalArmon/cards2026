import { Box, CircularProgress } from "@mui/material";

function Spinner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      {" "}
      <CircularProgress size={60} color="primary" />
    </Box>
  );
}

export default Spinner;
