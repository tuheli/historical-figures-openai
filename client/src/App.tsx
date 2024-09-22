import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ChatWithHistoricalFigurePage } from "./components/chat-with-historical-figure/ChatWithHistoricalFigurePage";
import { Redirect } from "./components/redirect/Redirect";

export const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ChatWithHistoricalFigurePage />} />
          <Route path="*" element={<Redirect to="/" />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};
