import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CountryList from "./components/CountryList";
import CountryListDeconstructed from "./components/CountryListDeconstructed";

export default function SendBoxPage() {
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginBottom: 3 }} variant="h1">
        Send Box{" "}
      </Typography>
      <CountryListDeconstructed />

      {/* <CountryList /> */}
    </Box>
  );
}
