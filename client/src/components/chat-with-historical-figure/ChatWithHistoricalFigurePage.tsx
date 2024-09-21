import { Box, Divider, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./HistoricalFigureProfile";
import { MessagesDrawer } from "./left-side-drawer/MessagesDrawer";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { MessageIsLoading } from "./MessageIsLoading";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <Box>
        <Stack
          sx={{
            flexDirection: "row",
            height: "calc(100vh - 0px)",
          }}
        >
          <Box
            sx={{
              p: 2,
            }}
          >
            <MessagesDrawer />
          </Box>
          <Divider orientation="vertical" />
          <Stack
            sx={{
              flex: 1,
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Box>
              <HistoricalFigureProfile />
            </Box>
            <Box>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Messages />
              </Box>
              <Box
                sx={{
                  mt: 2,
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
