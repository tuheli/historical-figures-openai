import { Box, Container, Divider, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./top-section/HistoricalFigureProfile";
import { Messages } from "./Messages";
import { SendMessage } from "./SendMessage";
import { MessageIsLoading } from "./MessageIsLoading";
import { MessagesDrawer } from "./left-side-drawer/MessagesDrawer";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box>
          <Stack
            sx={{
              flexDirection: "row",
              height: "calc(100vh - 0px)",
              maxHeight: "calc(100vh - 0px)",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 0,
                borderRight: "1px solid",
                borderColor: "divider",
              }}
            >
              <MessagesDrawer />
            </Box>
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
              <Box>
                <Box>
                  <Messages />
                </Box>
                <Box
                  sx={{
                    position: "sticky",
                    bottom: 1 * 8,
                    bgcolor: "background.paper",
                    mt: 3,
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      position: "relative",
                    }}
                  >
                    <MessageIsLoading />
                  </Box>
                  <SendMessage />
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
