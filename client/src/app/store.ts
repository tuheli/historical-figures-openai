import { configureStore } from "@reduxjs/toolkit";
import historicalFigureSlice from "../features/historicalFigureSlice";
import { apiSlice } from "../features/apiSlice";
import mobileSlice from "../features/mobileSlice";

export const store = configureStore({
  reducer: {
    historicalFigure: historicalFigureSlice,
    mobile: mobileSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
