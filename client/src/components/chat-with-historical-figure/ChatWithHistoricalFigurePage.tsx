import { Box, Container, Divider, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./top-section/HistoricalFigureProfile";
import { MessagesDrawer } from "./left-side-drawer/MessagesDrawer";
import { MessagesDrawerModal } from "./top-section/MessagesDrawerModal";
import { Messages } from "./messages/Messages";
import { MessageIsLoading } from "./messages/MessageIsLoading";
import { SendMessage } from "./messages/SendMessage";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <MessagesDrawerModal />
      <Container maxWidth={"xl"} sx={{}}>
        <Box>
          <Stack
            sx={{
              flexDirection: "row",
              height: "calc(100dvh)",
              overflow: { xs: undefined, sm: undefined, md: "auto" },
            }}
          >
            <Box
              sx={{
                position: "sticky",
                top: 0,
                borderRight: "1px solid",
                borderColor: "divider",
                display: { xs: "none", sm: "none", md: "block" },
                overflow: "auto",
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
