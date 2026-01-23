import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Hello() {
  const [fiveSecHasPass, setFiveSecHasPass] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFiveSecHasPass(true);
    }, 5000);
  }, []);
  return <Box>{fiveSecHasPass ? <Typography>Hello</Typography> : null}</Box>;
}
