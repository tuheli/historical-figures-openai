import { Box, Stack, Typography } from "@mui/material";
import { MessageProps } from "./MessageFromMe";
import { HistoricalFigure } from "../../../features/historicalFigureSlice";
import { formatDate } from "../../../utils/common";
import { useDispatch } from "react-redux";
import { openedFigureInfoModal } from "../../../features/modalControlSlice";

interface MessageFromOtherProps extends MessageProps {
  historicalFigure: HistoricalFigure;
}

export const MessageFromOther = ({
  message,
  historicalFigure,
  isLastElement,
}: MessageFromOtherProps) => {
  const formattedDate = formatDate(new Date(message.date));

  const dispatch = useDispatch();

  const onClickImage = () => {
    dispatch(openedFigureInfoModal());
  };

  return (
    <Stack
      ref={(ref) => {
        if (!isLastElement) return;
        ref?.scrollIntoView(true);
      }}
      sx={{
        flexDirection: "row",
      }}
    >
      <Box
        onClick={onClickImage}
        component="img"
        src={historicalFigure?.imageUrl}
        sx={{
          width: 50,
          height: 50,
          borderRadius: 25,
          mx: 1,
          "&:hover": {
            cursor: "pointer",
          },
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
            {formattedDate}
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
