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

import BCardBody from "./cardLayout/BCardBody";
import BCardFooter from "./cardLayout/BCardFooter";

export default function BCard({
  title,
  subheader,
  image,
  phone,
  address,
  email,
}) {
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
      <BCardBody
        title={title}
        subheader={subheader}
        phone={phone}
        address={address}
        email={email}
      />
      <BCardFooter />
    </Card>
  );
}
