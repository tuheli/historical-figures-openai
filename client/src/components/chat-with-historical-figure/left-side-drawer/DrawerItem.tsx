import { Box, Stack, Typography } from "@mui/material";
import { HistoricalFigure } from "../../../features/historicalFigureSlice";
import { formatDate, getPastDate } from "../../../utils/common";

interface DrawerItemProps {
  historicalFigure: HistoricalFigure;
  onClick: () => void;
}

export const DrawerItem = ({ historicalFigure, onClick }: DrawerItemProps) => {
  const messagesLength = historicalFigure.messages.length;
  const lastActiveDate =
    messagesLength > 0
      ? new Date(historicalFigure.messages[messagesLength - 1].date)
      : getPastDate(1, 7 * 24);
  const formattedDate = formatDate(lastActiveDate);

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
          Last Active: {formattedDate}
        </Typography>
      </Stack>
    </Stack>
  );
};
