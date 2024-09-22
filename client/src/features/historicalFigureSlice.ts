import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IMessage {
  id: string;
  sender: string;
  content: string;
  date: string;
}

const historicalFiguresData: HistoricalFigure[] = [
  {
    id: "1",
    name: "Abraham Lincoln",
    title: "President",
    imageUrl: "./cartoony/abraham-lincoln.png",
    messages: [],
  },
  {
    id: "2",
    name: "Albert Einstein",
    title: "Scientist",
    imageUrl: "./cartoony/albert-einstein.png",
    messages: [],
  },
  {
    id: "3",
    name: "Neil Armstrong",
    title: "Astronaut",
    imageUrl: "./cartoony/neil-armstrong.png",
    messages: [],
  },
];

export interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  messages: IMessage[];
}

interface State {
  allHistoricalFigures: HistoricalFigure[];
  selectedHistoricalFigureId: string | undefined;
  isLoadingMessage: boolean;
}

const initialState: State = {
  allHistoricalFigures: historicalFiguresData,
  selectedHistoricalFigureId: "1",
  isLoadingMessage: false,
};

const slice = createSlice({
  name: "historicalFigures",
  initialState,
  reducers: {
    selectedHistoricalFigure: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      state.selectedHistoricalFigureId = action.payload.id;
    },
    sentMessage: (
      state,
      action: PayloadAction<{ id: String; message: Omit<IMessage, "id"> }>
    ) => {
      const figure = state.allHistoricalFigures.find(
        (p) => p.id === action.payload.id
      );

      if (!figure) return;

      figure.messages.push({
        id: `${figure.messages.length + 1}`,
        content: action.payload.message.content,
        date: new Date().toLocaleString(),
        sender: action.payload.message.sender,
      });
    },
    startedWaitingForMessage: (state) => {
      state.isLoadingMessage = true;
    },
    endedWaitingForMessage: (state) => {
      state.isLoadingMessage = false;
    },
  },
});

export default slice.reducer;
export const {
  selectedHistoricalFigure,
  sentMessage,
  startedWaitingForMessage,
  endedWaitingForMessage,
} = slice.actions;
