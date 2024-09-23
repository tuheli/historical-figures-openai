import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { useHistoricalFigure } from "../../../hooks/useHistoricalFigure";
import {
  endedWaitingForMessage,
  sentMessage,
  startedWaitingForMessage,
} from "../../../features/historicalFigureSlice";
import SendIcon from "@mui/icons-material/Send";

export const SendMessage = () => {
  const [input, setInput] = useState("");
  const { figure, ask } = useHistoricalFigure();
  const dispatch = useAppDispatch();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!figure || !ask) return;

    dispatch(
      sentMessage({
        id: figure.id,
        message: {
          content: input,
          date: new Date().toLocaleString(),
          sender: "me",
        },
      })
    );

    dispatch(startedWaitingForMessage());
    setInput("");

    try {
      const response = await ask({ input, name: figure.name }).unwrap();
      dispatch(endedWaitingForMessage());
      dispatch(
        sentMessage({
          id: figure.id,
          message: {
            content: response.message,
            date: new Date().toLocaleString(),
            sender: figure.id,
          },
        })
      );
    } catch (error) {
      console.log(error);
      dispatch(endedWaitingForMessage());
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
      sx={{
        px: 2,
      }}
    >
      <TextField
        label={`Send a message`}
        variant="outlined"
        fullWidth
        value={input}
        onChange={({ target }) => setInput(target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={onSubmit}
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};
