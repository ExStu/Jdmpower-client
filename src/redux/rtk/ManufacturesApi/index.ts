import { jdmpowerApi as api } from "@redux/api";

import { ManufactureResponseDto } from "./types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getManufactures: build.query<ManufactureResponseDto, void>({
      query: () => ({ url: "/manufactures" }),
    }),
  }),
});
export { injectedRtkApi as ManufacturesApi };

export const { useGetManufacturesQuery, useLazyGetManufacturesQuery } =
  injectedRtkApi;
