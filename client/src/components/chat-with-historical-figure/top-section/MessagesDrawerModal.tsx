import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { MessagesDrawer } from "../left-side-drawer/MessagesDrawer";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { closedModal } from "../../../features/mobileSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export const MessagesDrawerModal = () => {
  const open = useAppSelector((state) => state.mobile.isChatModalOpen);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closedModal());
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <MessagesDrawer onClickItem={onClose} />
        </Box>
      </Modal>
    </div>
  );
};
