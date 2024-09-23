import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    historicalFigureChat: builder.mutation<
      { message: string },
      { input: string; name: string }
    >({
      query: (body) => ({
        url: "historical-figure-chat",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useHistoricalFigureChatMutation } = apiSlice;
