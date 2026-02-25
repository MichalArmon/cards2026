import { Box, Typography } from "@mui/material";
import { memo } from "react";

function ChildrenOfCounter({ OBJ }) {
  console.log("this component has been rendered again");
  return (
    <Box>
      <Typography variant="h2" color="success">
        {OBJ.firstName}
      </Typography>
    </Box>
  );
}

export default memo(ChildrenOfCounter);
