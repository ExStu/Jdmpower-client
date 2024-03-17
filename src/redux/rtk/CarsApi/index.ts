import { jdmpowerApi as api } from "@redux/api";

import { CarResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<CarResponseDto, void>({
      query: () => ({ url: "/cars" }),
    }),
  }),
});
export { injectedRtkApi as CarsApi };

export const { useGetCarsQuery, useLazyGetCarsQuery } = injectedRtkApi;
