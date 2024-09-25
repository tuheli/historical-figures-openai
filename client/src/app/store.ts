import { configureStore } from "@reduxjs/toolkit";
import historicalFigureSlice from "../features/historicalFigureSlice";
import { apiSlice } from "../features/apiSlice";
import modalControlSlice from "../features/modalControlSlice";

export const store = configureStore({
  reducer: {
    historicalFigure: historicalFigureSlice,
    modalControl: modalControlSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
