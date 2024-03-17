import Cookies from "js-cookie";

import { IAuthResponse, IEmailPassword } from "@redux/rtk/AuthApi/types";

import { saveToStorage } from "@utils/authTokens";

import { axiosClassic } from "@Services/authInterceptor";
import { REFRESH_TOKEN } from "@constants/tokens";
import { AUTH_STEP } from "@constants/url";

export const AuthService = {
  async main(type: AUTH_STEP.LOGIN | AUTH_STEP.REGISTER, data: IEmailPassword) {
    const response = await axiosClassic<IAuthResponse>({
      url: `/auth/${type}`,
      method: "POST",
      data,
    });

    if (response.data.accessToken) saveToStorage(response.data);

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get(REFRESH_TOKEN);

    const response = await axiosClassic.post<string, { data: IAuthResponse }>(
      "/auth/login/access-token",
      { refreshToken },
    );

    if (response.data.accessToken) saveToStorage(response.data);

    return response;
  },
};
