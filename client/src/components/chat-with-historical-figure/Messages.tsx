import { Stack } from "@mui/material";
import { MessageFromMe } from "./MessageFromMe";
import { MessageFromOther } from "./MessageFromOther";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";

export const Messages = () => {
  const figure = useHistoricalFigure();

  return (
    <Stack
      sx={{
        flex: 1,
        gap: 1,
      }}
    >
      {figure?.messages.map((message) => {
        const isFromMe = message.sender === "me";

        return (
          <>
            {isFromMe && <MessageFromMe key={message.id} message={message} />}
            {!isFromMe && (
              <MessageFromOther
                key={message.id}
                message={message}
                historicalFigure={figure}
              />
            )}
          </>
        );
      })}
    </Stack>
  );
};
