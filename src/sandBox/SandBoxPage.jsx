import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CountryList from "./components/CountryList";
import CountryListDeconstructed from "./components/CountryListDeconstructed";
import Parent from "./providersExample/Parent";
import MessageProvider from "./providers/SpecialMessageProvider";

export default function SendBoxPage() {
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginBottom: 3 }} variant="h1">
        Send Box{" "}
      </Typography>

      <MessageProvider>
        <Parent />
      </MessageProvider>
      <CountryListDeconstructed />

      {/* <CountryList /> */}
    </Box>
  );
}
