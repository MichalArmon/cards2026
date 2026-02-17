import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CssBaseline } from "@mui/material";
import CustomThemeProvider from "./providers/CustomThemeProvider.jsx";
import UserProvider from "./users/providers/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <CssBaseline>
          <UserProvider>
            <App />
          </UserProvider>
        </CssBaseline>
      </CustomThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
