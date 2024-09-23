import { Box, Container, Divider, Stack } from "@mui/material";
import { HistoricalFigureProfile } from "./top-section/HistoricalFigureProfile";
import { MessagesDrawer } from "./left-side-drawer/MessagesDrawer";
import { MessagesDrawerModal } from "./top-section/MessagesDrawerModal";
import { Messages } from "./messages/Messages";
import { MessageIsLoading } from "./messages/MessageIsLoading";
import { SendMessage } from "./messages/SendMessage";
import { HistoricalFigureFullInfo } from "./HistoricalFigureFullInfo";

export const ChatWithHistoricalFigurePage = () => {
  return (
    <>
      <MessagesDrawerModal />
      <HistoricalFigureFullInfo />
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
                top: 3 * 8,
                borderRight: "1px solid",
                borderColor: "divider",
                display: { xs: "none", sm: "none", md: "block" },
                overflow: "auto",
                pt: 3,
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
                    mt: 3,
                    bgcolor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      px: { xs: 1, sm: 1, md: 2 },
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
