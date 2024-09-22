import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "mobile",
  initialState: {
    isChatModalOpen: false,
  },
  reducers: {
    openedModal: (state) => {
      state.isChatModalOpen = true;
    },
    closedModal: (state) => {
      state.isChatModalOpen = false;
    },
  },
});

export default slice.reducer;
export const { openedModal, closedModal } = slice.actions;
