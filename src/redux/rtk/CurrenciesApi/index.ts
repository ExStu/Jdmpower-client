import { jdmpowerApi as api } from "@redux/api";

import { CurrencyResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrencies: build.query<CurrencyResponseDto[], void>({
      query: () => ({ url: "/currencies" }),
    }),
  }),
});
export { injectedRtkApi as CurrenciesApi };

export const { useGetCurrenciesQuery, useLazyGetCurrenciesQuery } = injectedRtkApi;
