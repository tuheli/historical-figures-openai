import { Box, Divider, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./top-section/HistoricalFigureProfile";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { MessageIsLoading } from "./MessageIsLoading";
import { MessagesDrawerModal } from "./top-section/MessagesDrawerModal";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <MessagesDrawerModal />
      <Box>
        <Stack
          sx={{
            flexDirection: "row",
            height: "calc(100vh - 0px)",
            maxHeight: "calc(100vh - 0px)",
          }}
        >
          <Divider orientation="vertical" />
          <Stack
            sx={{
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box
                sx={{
                  p: 2,
                }}
              >
                <HistoricalFigureProfile />
              </Box>
              <Divider />
            </Box>
            <Box
              sx={
                {
                  // bgcolor: "palegoldenrod",
                }
              }
            >
              <Box
                sx={{
                  // mt: 4,
                  overflowY: "scroll",
                  maxHeight: "60vh",
                  // bgcolor: "lightyellow",
                }}
              >
                <Messages />
              </Box>
              <Box
                sx={{
                  my: 1,
                  px: 2,
                }}
              >
                <MessageIsLoading />
                <SendMessage />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
