import { Box, Divider } from "@mui/material";
import React from "react";
import CountryList from "./components/CountryList";

export default function SendBoxPage() {
  return (
    <Box>
      <div>SendBoxPage</div>
      <Divider />
      <CountryList />
    </Box>
  );
}
