import React, { useMemo, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";
import { createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState("light")
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default App;
