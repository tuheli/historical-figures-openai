import { Box, Button, Stack, Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";

export const HistoricalFigureProfile = () => {
  const state = useAppSelector(
    (state) => state.historicalFigure.selectedHistoricalFigure
  );

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
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
            src={state?.imageUrl}
            sx={{
              width: 60,
              height: 60,
              borderRadius: 30,
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
              {state?.name}
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
