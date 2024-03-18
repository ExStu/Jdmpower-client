import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { stringify } from "qs";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.SERVER_URL,
  prepareHeaders: (headers) => headers.set("Content-Type", "application/json"),
  paramsSerializer: (params) =>
    stringify(params, { allowDots: true, arrayFormat: "comma" }),
});

export const jdmpowerApi = createApi({
  reducerPath: "jdmpowerApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
