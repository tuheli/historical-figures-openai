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
    imageUrl: "abraham-lincoln.png",
    messages: [
      // {
      //   id: "1",
      //   sender: "me",
      //   content:
      //     "Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you? Who are you?",
      //   date: new Date().toLocaleString(),
      // },
      // {
      //   id: "2",
      //   sender: "1",
      //   content:
      //     "Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. Hello! I am Abraham Lincoln. ",
      //   date: new Date().toLocaleString(),
      // },
    ],
  },
  {
    id: "2",
    name: "Albert Einstein",
    title: "Scientist",
    imageUrl: "albert-einstein.png",
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
