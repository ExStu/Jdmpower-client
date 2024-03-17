import { jdmpowerApi as api } from "@redux/api";

import { ModelResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getModels: build.query<ModelResponseDto, void>({
      query: () => ({ url: "/models" }),
    }),
  }),
});
export { injectedRtkApi as ModelsApi };

export const { useGetModelsQuery, useLazyGetModelsQuery } = injectedRtkApi;
