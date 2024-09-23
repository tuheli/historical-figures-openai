import { MessagesDrawer } from "../left-side-drawer/MessagesDrawer";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closedSelectFigureModal } from "../../../features/mobileSlice";
import { Dialog, DialogContent } from "@mui/material";

export const MessagesDrawerModal = () => {
  const open = useAppSelector((state) => state.mobile.isSelectFigureModalOpen);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closedSelectFigureModal());
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <MessagesDrawer onClickItem={onClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};
