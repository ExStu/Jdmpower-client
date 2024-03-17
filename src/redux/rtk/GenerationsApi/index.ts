import { jdmpowerApi as api } from "@redux/api";

import { GenerationResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGenerations: build.query<GenerationResponseDto, void>({
      query: () => ({ url: "/generations" }),
    }),
  }),
});
export { injectedRtkApi as GenerationsApi };

export const { useGetGenerationsQuery, useLazyGetGenerationsQuery } = injectedRtkApi;
