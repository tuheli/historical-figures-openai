import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    ping: builder.query<{ output: string }, void>({
      query: () => "/",
    }),
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

export const { usePingQuery, useHistoricalFigureChatMutation } = apiSlice;
