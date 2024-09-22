import { Box, Button, Stack, Typography } from "@mui/material";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";
import { ScaleInAnimation } from "../animation-wrapper/ScaleInAnimation";

export const HistoricalFigureProfile = () => {
  const { figure } = useHistoricalFigure();

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
          <ScaleInAnimation>
            <Box
              component="img"
              src={figure?.imageUrl}
              sx={{
                width: 70,
                height: 70,
                borderRadius: 35,
              }}
            />
          </ScaleInAnimation>
          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: "center",
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
