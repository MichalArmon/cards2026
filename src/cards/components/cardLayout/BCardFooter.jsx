import { CardActions, IconButton } from "@mui/material";
import { Edit, Favorite } from "@mui/icons-material";
import React from "react";
export default function BCardFooter() {
  return (
    <CardActions disableSpacing sx={{ mt: "auto" }}>
      <IconButton aria-label="add to favorites">
        <Favorite />
      </IconButton>
      <IconButton aria-label="edit card">
        <Edit />
      </IconButton>
    </CardActions>
  );
}
