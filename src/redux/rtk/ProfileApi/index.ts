import { jdmpowerApi as api } from "@redux/api";
import { ProfileResponseDto } from "@redux/rtk/ProfileApi/types";

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<ProfileResponseDto, void>({
      query: () => ({ url: "/users/profile" }),
    }),
  }),
});
export { injectedRtkApi as ProfileApi };

export const { useGetProfileQuery, useLazyGetProfileQuery } = injectedRtkApi;
