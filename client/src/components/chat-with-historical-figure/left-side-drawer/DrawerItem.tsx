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
        p: 2,
        gap: 1,
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src={historicalFigure.imageUrl}
        sx={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
      />
      <Stack>
        <Typography>{historicalFigure.name}</Typography>
        <Typography>Last Active: xxxx</Typography>
      </Stack>
    </Stack>
  );
};
