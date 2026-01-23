import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CounterPlus() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return (
    <>
      <Box>
        <Typography variant="h2">{count}</Typography>
      </Box>
    </>
  );
}
