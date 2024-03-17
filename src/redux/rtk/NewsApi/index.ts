import { jdmpowerApi as api } from "@redux/api";

import { NewsResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<NewsResponseDto[], void>({
      query: () => ({ url: "/news" }),
    }),
  }),
});
export { injectedRtkApi as NewsApi };

export const { useGetNewsQuery, useLazyGetNewsQuery } = injectedRtkApi;
