import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import { FormEvent, useState } from "react";
import { sentMessage } from "../../features/historicalFigureSlice";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";
import { useAbrahamLincolnMutation } from "../../features/apiSlice";

export const SendMessage = () => {
  const [input, setInput] = useState("");
  const [askAbrahamLincoln] = useAbrahamLincolnMutation();
  const figure = useHistoricalFigure();
  const dispatch = useAppDispatch();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!figure) return;

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

    setInput("");

    try {
      const response = await askAbrahamLincoln({ input }).unwrap();

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
    }
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit}>
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
