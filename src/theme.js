import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#7B5CD6", // purple main
      light: "#9D86E8",
      dark: "#5A3FB0",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#B39DDB", // soft lavender
      light: "#D1C4E9",
      dark: "#9575CD",
    },

    background: {
      default: "#F6F3FB", // very light purple
      paper: "#FFFFFF",
    },

    text: {
      primary: "#2E2A3A",
      secondary: "#6E6686",
    },

    divider: "#E3DDF3",
  },

  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,

    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          paddingInline: 20,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
