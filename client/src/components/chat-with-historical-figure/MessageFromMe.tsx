import { Stack, Typography } from "@mui/material";
import { IMessage } from "../../features/historicalFigureSlice";

interface MessageProps {
  message: IMessage;
}

export const MessageFromMe = ({ message }: MessageProps) => {
  const date = new Date(message.date);
  return (
    <Stack
      sx={{
        width: "fit-content",
        minWidth: 200,
        maxWidth: "60%",
        alignSelf: "flex-end",
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
          You
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
          borderTopRightRadius: 0,
          p: 1.5,
        }}
      >
        {message.content}
      </Typography>
    </Stack>
  );
};
