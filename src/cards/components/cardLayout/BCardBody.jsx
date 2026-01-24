import {
  EmailOutlined,
  HomeOutlined,
  LocalPhoneOutlined,
  Phone,
} from "@mui/icons-material";
import {
  Box,
  CardHeader,
  CardContent,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

export default function BCardBody({ title, subheader, phone, address, email }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <List disablePadding sx={{ width: "100%", maxWidth: 360 }}>
          <ListItem
            disableGutters
            disablePadding
            sx={{ minWidth: 0, gap: 1, fontSize: 16 }}
          >
            <LocalPhoneOutlined sx={{ fontSize: "inherit" }} />

            <Typography sx={{ fontSize: "inherit" }}>{phone}</Typography>
          </ListItem>
          <ListItem
            disableGutters
            disablePadding
            sx={{ minWidth: 0, gap: 1, fontSize: 16 }}
          >
            <EmailOutlined sx={{ fontSize: "inherit" }} />

            <Typography sx={{ fontSize: "inherit" }}>{email}</Typography>
          </ListItem>
          <ListItem
            disableGutters
            disablePadding
            sx={{ minWidth: 0, gap: 1, fontSize: 16 }}
          >
            <HomeOutlined sx={{ fontSize: "inherit" }} />

            <Typography sx={{ fontSize: "inherit" }}>{address}</Typography>
          </ListItem>
        </List>
      </CardContent>
    </Box>
  );
}
