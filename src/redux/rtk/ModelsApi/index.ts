import { jdmpowerApi as api } from "@redux/api";

import { ModelResponseDto, ModelsByCarArg } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getModels: build.query<ModelResponseDto[], void>({
      query: () => ({ url: "/models" }),
    }),
    getModelsByCar: build.query<ModelResponseDto[], ModelsByCarArg>({
      query: (queryArg) => ({ url: `/models/by-car/${queryArg.carSlug}` }),
    }),
  }),
});
export { injectedRtkApi as ModelsApi };

export const {
  useGetModelsQuery,
  useLazyGetModelsQuery,
  useGetModelsByCarQuery,
  useLazyGetModelsByCarQuery,
} = injectedRtkApi;
