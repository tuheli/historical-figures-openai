import { Box, Button, Stack, Typography } from "@mui/material";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";

export const HistoricalFigureProfile = () => {
  const figure = useHistoricalFigure();

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
          px: 2,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            gap: 1,
          }}
        >
          <Box
            component="img"
            src={figure?.imageUrl}
            sx={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              {figure?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontStyle: "italic",
              }}
            >
              Active now
            </Typography>
          </Stack>
        </Stack>
        <Button variant="contained">View Profile</Button>
      </Stack>
    </>
  );
};
