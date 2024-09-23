import { Box, Divider, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DrawerItem } from "./DrawerItem";
import { selectedHistoricalFigure } from "../../../features/historicalFigureSlice";

interface MessagesDrawerProps {
  onClickItem?: () => void;
}

export const MessagesDrawer = ({ onClickItem }: MessagesDrawerProps) => {
  const state = useAppSelector(
    (state) => state.historicalFigure.allHistoricalFigures
  );

  const dispatch = useAppDispatch();

  const onClickDrawerItem = (id: string) => {
    dispatch(selectedHistoricalFigure({ id }));
    onClickItem && onClickItem();
  };

  return (
    <>
      <Box
        sx={{
          width: { xs: undefined, md: 340 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            py: 2,
            px: 2,
          }}
        >
          <Typography variant="h5">Contacts</Typography>
        </Stack>
        <Stack>
          {state.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.05)",
                  },
                }}
              >
                <Box
                  sx={{
                    px: 2,
                    py: 1,
                  }}
                >
                  <DrawerItem
                    historicalFigure={item}
                    onClick={() => onClickDrawerItem(item.id)}
                  />
                </Box>
                <Divider />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};
