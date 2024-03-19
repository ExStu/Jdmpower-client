import { jdmpowerApi as api } from "@redux/api";

import {
  GenerationResponseDto,
  GenerationsByIdArg,
  GenerationsByModelArg,
} from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGenerations: build.query<GenerationResponseDto[], void>({
      query: () => ({ url: "/generations" }),
    }),
    getGenerationsByModel: build.query<
      GenerationResponseDto[],
      GenerationsByModelArg
    >({
      query: (queryArg) => ({ url: `/generations/by-model/${queryArg.modelSlug}` }),
    }),
    getGenerationById: build.query<GenerationResponseDto, GenerationsByIdArg>({
      query: (queryArg) => ({
        url: `/generations/${queryArg.generationId}`,
      }),
    }),
  }),
});
export { injectedRtkApi as GenerationsApi };

export const {
  useGetGenerationsQuery,
  useLazyGetGenerationsQuery,
  useGetGenerationsByModelQuery,
  useLazyGetGenerationsByModelQuery,
  useGetGenerationByIdQuery,
  useLazyGetGenerationByIdQuery,
} = injectedRtkApi;
