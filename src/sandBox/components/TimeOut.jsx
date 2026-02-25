import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function TimeOut() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timeOutID);
  }, [count]);

  const calculateDaysLeft = () => {
    const now = new Date().getTime();
    const surfingCampDate = new Date("2026-03-15T08:00:00").getTime();

    const msInOneDAY = 1000 * 60 * 60 * 24;
    return Math.ceil((surfingCampDate - now) / msInOneDAY);
  };
  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    setInterval(() => {
      setDaysLeft(calculateDaysLeft(), 1000 * 60 * 60 * 24);
    }, 1000);
  }, []);

  return (
    <Box>
      {/* <Typography variant="h5">{count}</Typography> */}
      <Typography variant="h5">{count}</Typography>
      <Typography variant="h5">Days until surf camp: {daysLeft} 🌊</Typography>
    </Box>
  );
}

export default TimeOut;
