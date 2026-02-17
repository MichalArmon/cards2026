import { AppBar, Toolbar, Box, Tabs, Tab, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CardGiftcard,
  AppRegistration,
  Favorite,
  Home,
  Person,
  School,
  Style,
  Login,
} from "@mui/icons-material";

import { ROUTES } from "../../routes/routerDict";
import { useCustomTheme } from "../../providers/CustomThemeProvider";

const Pages = [
  {
    label: "Home",
    path: ROUTES.home,
    icon: <Home />,
  },
  {
    label: "About",
    path: ROUTES.about,
    icon: <Person />,
  },
  {
    label: "Cards",
    path: ROUTES.home,
    icon: <CardGiftcard />,
  },
  {
    label: "My Cards",
    path: ROUTES.MyCards,
    icon: <Style />,
  },
  {
    label: "Favorites",
    path: ROUTES.favorite,
    icon: <Favorite />,
  },
  {
    label: "Sand Box",
    path: ROUTES.sandBox,
    icon: <School />,
  },
];

const register = {
  label: "Register",
  path: ROUTES.register,
  icon: <AppRegistration />,
};

const login = {
  label: "Login",
  path: ROUTES.login,
  icon: <Login />,
};
export default function Header() {
  const [selected, setSelected] = useState("Home");
  const { isDark, setIsDark, toggleMode } = useCustomTheme();

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Tabs
          onChange={(_e, newValue) => setSelected(newValue)}
          value={selected}
          display="flex"
          sx={{
            justifyContent: "space-around",
            width: "70%",
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
          <Tab
            icon={register.icon}
            component={Link}
            to={register.path}
            value={register.label}
            key={register.label}
            label={register.label}
            sx={{
              color: "secondary.light",
              fontSize: 16,
              "&.Mui-selected": { fontWeight: 600, color: "secondary.light" },
            }}
          />
          <Tab
            icon={login.icon}
            component={Link}
            to={login.path}
            value={login.label}
            key={login.label}
            label={login.label}
            sx={{
              color: "secondary.light",
              fontSize: 16,
              "&.Mui-selected": { fontWeight: 600, color: "secondary.light" },
            }}
          />
        </Tabs>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: 16,
            "&.Mui-selected": { fontWeight: 600, color: "secondary.light" },
          }}
          onClick={toggleMode}
        >
          {isDark ? "Light" : "Dark"}
        </Button>
        <Box>Logo</Box>
      </Toolbar>
    </AppBar>
  );
}
