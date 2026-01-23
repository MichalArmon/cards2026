import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  CardActions,
  Box,
} from "@mui/material";
import { Description, Edit, Favorite } from "@mui/icons-material";
Favorite;
Edit;

export default function BCard({ title, subheader, description, image }) {
  return (
    <Card
      sx={{
        m: "auto",
        width: 250,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" image={image} height="180" />
      <Box sx={{ flexGrow: 1 }}>
        <CardHeader title={title} subheader={subheader} />
        <CardContent>{description}</CardContent>
      </Box>

      <CardActions disableSpacing sx={{ mt: "auto" }}>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="edit card">
          <Edit />
        </IconButton>
      </CardActions>
    </Card>
  );
}
