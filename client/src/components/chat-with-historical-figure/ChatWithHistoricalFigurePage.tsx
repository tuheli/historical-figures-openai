import { Box, Container, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./HistoricalFigureProfile";
import { MessagesDrawer } from "./MessagesDrawer";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { MessageIsLoading } from "./MessageIsLoading";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          sx={{
            flexDirection: "row",
            m: 2,
          }}
        >
          <MessagesDrawer />
          <Stack
            sx={{
              flex: 1,
            }}
          >
            <HistoricalFigureProfile />
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
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
