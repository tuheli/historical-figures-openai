import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { FormEvent, useState } from "react";
import {
  endedWaitingForMessage,
  sentMessage,
  startedWaitingForMessage,
} from "../../features/historicalFigureSlice";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";

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
      const response = await ask({ input }).unwrap();
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
        label={`Send a message to ${figure?.name}`}
        variant="outlined"
        fullWidth
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
    </Box>
  );
};
