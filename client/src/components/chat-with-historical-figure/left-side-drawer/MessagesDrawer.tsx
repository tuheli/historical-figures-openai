import { Box, Divider, Stack, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DrawerItem } from "./DrawerItem";
import { selectedHistoricalFigure } from "../../../features/historicalFigureSlice";

export const MessagesDrawer = () => {
  const state = useAppSelector(
    (state) => state.historicalFigure.allHistoricalFigures
  );

  const dispatch = useAppDispatch();

  const onClickDrawerItem = (id: string) => {
    dispatch(selectedHistoricalFigure({ id }));
  };

  return (
    <>
      <Box
        sx={{
          width: 340,
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRight: "1px solid grey",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src="logoipsum-296.svg"
            sx={{
              height: 50,
              width: 50,
            }}
          />
          <Typography variant="h6" component="p">
            Messages
          </Typography>
        </Stack>
        <Stack
          sx={{
            gap: 2,
          }}
        >
          {state.map((item) => {
            return (
              <Box key={item.id}>
                <DrawerItem
                  historicalFigure={item}
                  onClick={() => onClickDrawerItem(item.id)}
                />
                <Divider />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};
