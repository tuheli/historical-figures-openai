import { Box, Container, Stack, Typography } from "@mui/material";
import { LedCard } from "./LedCard";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import { useNavigate } from "react-router-dom";

export const WelcomeAIHistoricalFigures = () => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate("/figures");
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Box
              sx={{
                maxWidth: 700,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: 600,
                }}
              >
                Welcome{" "}
                <Typography
                  variant="h3"
                  component="span"
                  sx={{
                    fontWeight: 600,
                    color: "blue",
                  }}
                >
                  AI Historical Figures
                </Typography>{" "}
                into the classroom.
              </Typography>
              <Typography
                sx={{
                  mb: 4,
                }}
              >
                Choose from either a conversation with the class on the
                teacher's screen, or let your students converse themselves on
                their own devices. All whlist you maintain control on your admin
                portal.
              </Typography>
            </Box>
          </Box>
          <Stack
            sx={{
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LedCard
              imageSrc="url('teacher-image.png')"
              heading="Teacher Led"
              subheading="Have a class discussion from your screen."
              Icon={<TabletAndroidIcon fontSize="large" />}
              onClick={onClickCard}
            />
            <LedCard
              imageSrc="url('teacher-image.png')"
              heading="Student Led"
              subheading="Let students converse on their own iPads."
              Icon={<TabletAndroidIcon fontSize="large" />}
              onClick={onClickCard}
            />
          </Stack>
        </Box>
      </Container>
    </>
  );
};
