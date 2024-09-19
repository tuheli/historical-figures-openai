import { Box } from "@mui/material";
import { DefaultAppBar } from "../appbar/DefaultAppBar";
import { PickAHistoricalFigure } from "./PickAHistoricalFigure";
import { HistoricalFigureCards } from "./HistoricalFigureCards";

export const PickAHistoricalFigurePage = () => {
  return (
    <>
      <DefaultAppBar />
      <Box
        sx={{
          pt: 8,
        }}
      >
        <PickAHistoricalFigure />
        <HistoricalFigureCards />
      </Box>
    </>
  );
};
