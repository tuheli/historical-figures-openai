import { Route, Routes } from "react-router-dom";
import { WelcomeAIHistoricalFiguresPage } from "./components/welcome-ai-historical-figures/WelcomeAIHistoricalFiguresPage";
import { PickAHistoricalFigurePage } from "./components/pick-a-historical-figure/PickAHistoricalFigurePage";
import { ChatWithHistoricalFigurePage } from "./components/chat-with-historical-figure/ChatWithHistoricalFigurePage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomeAIHistoricalFiguresPage />} />
        <Route path="/figures" element={<PickAHistoricalFigurePage />} />
        <Route path="/chat" element={<ChatWithHistoricalFigurePage />} />
      </Routes>
    </>
  );
};
