import { AppBar, Toolbar, Box, Tabs, Tab, colors } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardGiftcard,
  Favorite,
  Home,
  Person,
  Style,
} from "@mui/icons-material";

const Pages = [
  {
    label: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    label: "About",
    path: "/about",
    icon: <Person />,
  },
  {
    label: "Cards",
    path: "/",
    icon: <CardGiftcard />,
  },
  {
    label: "My Cards",
    path: "/my-cards",
    icon: <Style />,
  },
  {
    label: "Favorites",
    path: "/favorites",
    icon: <Favorite />,
  },
];

export default function Header() {
  const [selected, setSelected] = useState("Home");
  const selectedTab = { color: "secondary.light", fontSize: 40 };
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Tabs
          onChange={(_e, newValue) => setSelected(newValue)}
          value={selected}
          display="flex"
          sx={{
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          {Pages.map((page) => (
            <Tab
              icon={page.icon}
              component={Link}
              to={page.path}
              value={page.label}
              key={page.label}
              label={page.label}
              sx={{
                color: "secondary.light",
                fontSize: 16,
                "&.Mui-selected": { fontWeight: 600, color: "secondary.light" },
              }}
            />
          ))}
        </Tabs>
        <Box>Logo</Box>
      </Toolbar>
    </AppBar>
  );
}
