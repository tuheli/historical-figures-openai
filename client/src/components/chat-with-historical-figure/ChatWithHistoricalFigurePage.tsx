import { Box, Container, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./HistoricalFigureProfile";
import { MessagesDrawer } from "./MessagesDrawer";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";

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
                mt: 4,
              }}
            >
              <SendMessage />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
