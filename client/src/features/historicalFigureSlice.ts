import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const historicalFiguresData: HistoricalFigure[] = [
  {
    id: "1",
    name: "Abraham Lincoln",
    title: "President",
    description:
      "16th President of the United States who led the nation through the Civil War and worked to end slavery.",
    imageUrl: "./cartoony/abraham-lincoln.png",
    messages: [],
  },
  {
    id: "2",
    name: "Albert Einstein",
    title: "Scientist",
    description:
      "Theoretical physicist known for developing the theory of relativity and contributions to quantum mechanics.",
    imageUrl: "./cartoony/albert-einstein.png",
    messages: [],
  },
  {
    id: "3",
    name: "Neil Armstrong",
    title: "Astronaut",
    description:
      "American astronaut and aeronautical engineer who became the first person to walk on the Moon.",
    imageUrl: "./cartoony/neil-armstrong.png",
    messages: [],
  },
  {
    id: "4",
    name: "Marie Curie",
    title: "Physicist and Chemist",
    description:
      "Pioneering researcher on radioactivity and the first woman to win a Nobel Prize.",
    imageUrl: "./cartoony/marie-curie.png",
    messages: [],
  },
  {
    id: "5",
    name: "Mahatma Gandhi",
    title: "Leader",
    description:
      "Leader of the Indian independence movement against British rule, known for his philosophy of nonviolent resistance.",
    imageUrl: "./cartoony/mahatma-gandhi.png",
    messages: [],
  },
  {
    id: "6",
    name: "Leonardo da Vinci",
    title: "Polymath",
    description:
      "Italian Renaissance polymath skilled in painting, engineering, science, and invention.",
    imageUrl: "./cartoony/leonardo-da-vinci.png",
    messages: [],
  },
  {
    id: "7",
    name: "Isaac Newton",
    title: "Mathematician and Physicist",
    description:
      "Formulated the laws of motion and universal gravitation, laying the foundation for classical mechanics.",
    imageUrl: "./cartoony/isaac-newton.png",
    messages: [],
  },
  {
    id: "8",
    name: "Martin Luther King Jr.",
    title: "Civil Rights Leader",
    description:
      "American minister and activist who became the most visible spokesperson in the Civil Rights Movement.",
    imageUrl: "./cartoony/martin-luther-king-jr.png",
    messages: [],
  },
];

export interface IMessage {
  id: string;
  sender: string;
  content: string;
  date: string;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  description: string;
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
        date: new Date().toISOString(),
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
