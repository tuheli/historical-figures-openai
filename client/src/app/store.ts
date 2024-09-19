import { configureStore } from "@reduxjs/toolkit";
import historicalFigureSlice from "../features/historicalFigureSlice";

export const store = configureStore({
  reducer: {
    historicalFigure: historicalFigureSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
