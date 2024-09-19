import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const historicalFiguresData: Array<{
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}> = [
  {
    id: "1",
    name: "Abraham Lincoln",
    title: "President",
    imageUrl: "abraham-lincoln.png",
  },
  {
    id: "2",
    name: "Albert Einstein",
    title: "Scientist",
    imageUrl: "albert-einstein.png",
  },
];

interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
}

interface State {
  allHistoricalFigures: HistoricalFigure[];
  selectedHistoricalFigure: HistoricalFigure | undefined;
}

const initialState: State = {
  allHistoricalFigures: historicalFiguresData
    .concat(historicalFiguresData)
    .concat(historicalFiguresData)
    .concat(historicalFiguresData)
    .concat(historicalFiguresData),
  selectedHistoricalFigure: undefined,
};

const slice = createSlice({
  name: "historicalFigures",
  initialState,
  reducers: {
    selectedHistoricalFigure: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.selectedHistoricalFigure = state.allHistoricalFigures.find(
        (p) => p.id === action.payload.id
      );
    },
  },
});

export default slice.reducer;
export const { selectedHistoricalFigure } = slice.actions;
