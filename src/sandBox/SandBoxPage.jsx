import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import CountryList from "./components/CountryList";
import CountryListDeconstructed from "./components/CountryListDeconstructed";
import Parent from "./providersExample/Parent";
import MessageProvider from "./providers/SpecialMessageProvider";
import Counter from "./components/counter/Counter";
import { useUser } from "../users/providers/UserProvider";
import { Navigate } from "react-router-dom";
import TextFiledUseRef from "./components/useRef/TextFiledUseRef";
import TextFiledUseState from "./components/useRef/TextFiledUseState";
import TimeOut from "./components/TimeOut";

export default function SendBoxPage() {
  const { user } = useUser();
  if (!user) {
    return <Navigate to={"/"} replace />;
  }
  return (
    <Box
      display={"flex"}
      sx={{ flexDirection: "column", alignItems: "center" }}
    >
      <Typography sx={{ marginBottom: 3 }} variant="h1">
        Send Box{" "}
      </Typography>

      <Box sx={{ mb: 10 }}>
        <TimeOut />
      </Box>
      <Box sx={{ mb: 10 }}>
        <TextFiledUseState />
      </Box>
      <Box sx={{ mb: 10 }}>
        <TextFiledUseRef />
      </Box>
      <Counter />
      <MessageProvider>
        <Parent />
      </MessageProvider>
      <CountryListDeconstructed />

      {/* <CountryList /> */}
    </Box>
  );
}
