import { Box, Button, Stack, Typography } from "@mui/material";
import { useHistoricalFigure } from "../../../hooks/useHistoricalFigure";
import { ScaleInAnimation } from "../../animation-wrapper/ScaleInAnimation";
import { useAppDispatch } from "../../../app/hooks";
import {
  openedFigureInfoModal,
  openedSelectFigureModal,
} from "../../../features/mobileSlice";

export const HistoricalFigureProfile = () => {
  const { figure } = useHistoricalFigure();

  const dispatch = useAppDispatch();

  const onClickContacts = () => {
    dispatch(openedSelectFigureModal());
  };

  const onClickProfileImage = () => {
    dispatch(openedFigureInfoModal());
  };

  return (
    <>
      <Stack
        sx={{
          flexDirection: { xs: "row", sm: "row" },
          gap: { xs: 2, sm: 0 },
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
              onClick={onClickProfileImage}
              component="img"
              src={figure?.imageUrl}
              sx={{
                width: 70,
                height: 70,
                borderRadius: 35,
                "&:hover": {
                  cursor: "pointer",
                },
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
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontStyle: "italic",
                }}
              >
                Active now
              </Typography>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  bgcolor: "lightgreen",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          onClick={onClickContacts}
          size="small"
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            width: 110,
          }}
        >
          Contacts
        </Button>
      </Stack>
    </>
  );
};
