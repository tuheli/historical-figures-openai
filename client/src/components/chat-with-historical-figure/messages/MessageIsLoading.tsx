import { Box, LinearProgress } from "@mui/material";
import { useAppSelector } from "../../../app/hooks";

export const MessageIsLoading = () => {
  const isLoadingMessage = useAppSelector(
    (state) => state.historicalFigure.isLoadingMessage
  );

  return (
    <Box
      sx={{
        position: "relative",
        top: -14,
        width: "100%",
        display: isLoadingMessage ? "block" : "hidden",
      }}
    >
      <LinearProgress
        sx={{
          borderRadius: 100,
        }}
      />
    </Box>
  );
};
