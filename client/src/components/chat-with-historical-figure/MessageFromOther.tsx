import { Box, Stack, Typography } from "@mui/material";
import {
  HistoricalFigure,
  IMessage,
} from "../../features/historicalFigureSlice";

interface MessageFromOtherProps {
  message: IMessage;
  historicalFigure: HistoricalFigure;
}

export const MessageFromOther = ({
  message,
  historicalFigure,
}: MessageFromOtherProps) => {
  const date = new Date(message.date);
  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      <Box
        component="img"
        src={historicalFigure?.imageUrl}
        sx={{
          width: 50,
          height: 50,
          borderRadius: 25,
          mx: 1,
        }}
      />
      <Stack
        sx={{
          width: "fit-content",
          minWidth: 300,
          maxWidth: "80%",
          alignSelf: "flex-start",
          gap: 1,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
            }}
          >
            {historicalFigure.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              color: "grey",
            }}
          >
            {date.toLocaleTimeString()}
          </Typography>
        </Stack>
        <Typography
          sx={{
            bgcolor: "lightblue",
            borderRadius: 2,
            borderTopLeftRadius: 0,
            p: 1.5,
          }}
        >
          {message.content}
        </Typography>
      </Stack>
    </Stack>
  );
};
