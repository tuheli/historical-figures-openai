import { Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./HistoricalFigureProfile";
import { Messages } from "./Messages";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          m: 2,
        }}
      >
        <Messages />
        <HistoricalFigureProfile />
      </Stack>
    </>
  );
};
