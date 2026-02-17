import { createContext, useContext, useState } from "react";
import { darkPalette, lightPalette } from "../theme";
import { ThemeProvider } from "@emotion/react";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };
  const theme = isDark ? darkPalette : lightPalette;

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, theme, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("You used the message context of the message provider!");
  }
  return context;
};
