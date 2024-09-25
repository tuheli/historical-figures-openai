import { Box, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { useHistoricalFigure } from "../../hooks/useHistoricalFigure";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closedFigureInfoModal } from "../../features/modalControlSlice";

export const HistoricalFigureFullInfoModal = () => {
  const isOpen = useAppSelector(
    (state) => state.modalControl.isFigureInfoModalOpen
  );

  const { figure } = useHistoricalFigure();
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closedFigureInfoModal());
  };

  if (!figure) return null;

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} onClick={onClose}>
        <DialogContent>
          <Stack sx={{ gap: 2 }}>
            <Box>
              <Box
                component="img"
                src={figure?.imageUrl}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {figure.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  {figure.title}
                </Typography>
              </Box>
            </Box>
            <Typography>"{figure.description}"</Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
