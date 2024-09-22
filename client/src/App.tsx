import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { WelcomeAIHistoricalFiguresPage } from "./components/welcome-ai-historical-figures/WelcomeAIHistoricalFiguresPage";
import { PickAHistoricalFigurePage } from "./components/pick-a-historical-figure/PickAHistoricalFigurePage";
import { ChatWithHistoricalFigurePage } from "./components/chat-with-historical-figure/ChatWithHistoricalFigurePage";

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
          <Route path="/" element={<WelcomeAIHistoricalFiguresPage />} />
          <Route path="/figures" element={<PickAHistoricalFigurePage />} />
          <Route path="/chat" element={<ChatWithHistoricalFigurePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};
