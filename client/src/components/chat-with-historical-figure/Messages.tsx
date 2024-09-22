import { Stack } from "@mui/material";
import { MessageFromMe } from "./MessageFromMe";
import { MessageFromOther } from "./MessageFromOther";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";

export const Messages = () => {
  const { figure } = useHistoricalFigure();

  if (!figure) return null;

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
        p: 1,
      }}
    >
      {figure.messages.map((message, index) => {
        const isFromMe = message.sender === "me";
        const isLastElement = index === figure.messages.length - 1;

        return isFromMe ? (
          <MessageFromMe
            key={message.id}
            message={message}
            isLastElement={isLastElement}
          />
        ) : (
          <MessageFromOther
            key={message.id}
            message={message}
            historicalFigure={figure}
            isLastElement={isLastElement}
          />
        );
      })}
    </Stack>
  );
};
