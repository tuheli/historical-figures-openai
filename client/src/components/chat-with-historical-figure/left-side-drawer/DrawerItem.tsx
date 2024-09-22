import { Box, Stack, Typography } from "@mui/material";
import { HistoricalFigure } from "../../../features/historicalFigureSlice";

interface DrawerItemProps {
  historicalFigure: HistoricalFigure;
  onClick: () => void;
}

export const DrawerItem = ({ historicalFigure, onClick }: DrawerItemProps) => {
  return (
    <Stack
      onClick={onClick}
      sx={{
        flexDirection: "row",
        height: 80,
        gap: 1,
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={historicalFigure.imageUrl}
        sx={{
          width: 60,
          height: 60,
          borderRadius: 30,
        }}
      />
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          {historicalFigure.name}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          Last Active: xxxx
        </Typography>
      </Stack>
    </Stack>
  );
};
