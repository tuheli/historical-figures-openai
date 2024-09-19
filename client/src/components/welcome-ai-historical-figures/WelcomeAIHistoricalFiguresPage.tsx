import { Box } from "@mui/material";
import { DefaultAppBar } from "../appbar/DefaultAppBar";
import { WelcomeAIHistoricalFigures } from "./WelcomeAIHistoricalFigures";

export const WelcomeAIHistoricalFiguresPage = () => {
  return (
    <>
      <DefaultAppBar />
      <Box
        sx={{
          pt: 8,
        }}
      >
        <WelcomeAIHistoricalFigures />
      </Box>
    </>
  );
};
