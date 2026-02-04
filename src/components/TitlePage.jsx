import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Children } from "react";

function TitlePage({ Children }) {
  return (
    <Typography variant="h4" color={grey[800]}>
      {Children}
    </Typography>
  );
}

export default TitlePage;
