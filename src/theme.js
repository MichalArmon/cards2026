import { createTheme } from "@mui/material/styles";

// פלטת LIGHT - הסגולה ששלחת
const lightPaletteOBJ = {
  palette: {
    mode: "light",
    primary: {
      main: "#7B5CD6", // purple main
      light: "#9D86E8",
      dark: "#5A3FB0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#B39DDB",
      light: "#D1C4E9",
      dark: "#9575CD",
    },
    background: {
      default: "#fbf3f3ff", // הסגול הבהיר שרצית
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2E2A3A",
      secondary: "#6E6686",
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
};

// פלטת DARK - מותאמת לסגול אבל כהה
const darkPaletteOBJ = {
  palette: {
    mode: "dark",
    primary: {
      main: "#9D86E8", // סגול בהיר יותר כדי שיבלוט על שחור
      light: "#B39DDB",
      dark: "#7B5CD6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#B39DDB",
    },
    background: {
      default: "#121212", // רקע כהה סטנדרטי
      paper: "#1E1E1E", // ניגודיות עדינה לכרטיסים
    },
    text: {
      primary: "#ffffff",
      secondary: "#B39DDB",
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
};

export const darkPalette = createTheme(darkPaletteOBJ);
export const lightPalette = createTheme(lightPaletteOBJ);
