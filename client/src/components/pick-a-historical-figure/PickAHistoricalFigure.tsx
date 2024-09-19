import { Box, Container, Typography } from "@mui/material";

export const PickAHistoricalFigure = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontWeight: 600,
            }}
          >
            Pick a{" "}
            <Typography
              variant="h3"
              component="span"
              sx={{
                fontWeight: 600,
                color: "blue",
              }}
            >
              Historical Figure
            </Typography>{" "}
          </Typography>
        </Box>
      </Container>
    </>
  );
};
