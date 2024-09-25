import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modalControl",
  initialState: {
    isSelectFigureModalOpen: false,
    isFigureInfoModalOpen: false,
  },
  reducers: {
    openedSelectFigureModal: (state) => {
      state.isSelectFigureModalOpen = true;
    },
    closedSelectFigureModal: (state) => {
      state.isSelectFigureModalOpen = false;
    },
    openedFigureInfoModal: (state) => {
      state.isFigureInfoModalOpen = true;
    },
    closedFigureInfoModal: (state) => {
      state.isFigureInfoModalOpen = false;
    },
  },
});

export default slice.reducer;
export const {
  openedSelectFigureModal,
  closedSelectFigureModal,
  openedFigureInfoModal,
  closedFigureInfoModal,
} = slice.actions;
