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
    abrahamLincoln: builder.mutation<{ message: string }, { input: string }>({
      query: (body) => ({
        url: "abraham-lincoln",
        method: "POST",
        body,
      }),
    }),
    albertEinstein: builder.mutation<{ message: string }, { input: string }>({
      query: (body) => ({
        url: "albert-einstein",
        method: "POST",
        body,
      }),
    }),
    neilArmstrong: builder.mutation<{ message: string }, { input: string }>({
      query: (body) => ({
        url: "neil-armstrong",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePingQuery,
  useAbrahamLincolnMutation,
  useAlbertEinsteinMutation,
  useNeilArmstrongMutation,
} = apiSlice;
