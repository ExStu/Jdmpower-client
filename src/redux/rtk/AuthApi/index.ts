import { jdmpowerApi as api } from "@redux/api";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<any, void>({
      query: () => ({ url: "/cars" }),
    }),
  }),
});
export { injectedRtkApi as CarsApi };

export const { useGetCarsQuery, useLazyGetCarsQuery } = injectedRtkApi;
