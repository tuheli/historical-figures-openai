import { MessagesDrawer } from "../left-side-drawer/MessagesDrawer";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closedModal } from "../../../features/mobileSlice";
import { Dialog, DialogContent } from "@mui/material";

export const MessagesDrawerModal = () => {
  const open = useAppSelector((state) => state.mobile.isChatModalOpen);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closedModal());
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
