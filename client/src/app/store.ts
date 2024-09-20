import { configureStore } from "@reduxjs/toolkit";
import historicalFigureSlice from "../features/historicalFigureSlice";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    historicalFigure: historicalFigureSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
