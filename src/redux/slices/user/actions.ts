import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAuthResponse, IEmailPassword } from "@redux/rtk/AuthApi/types";

import { removeFromStorage } from "@utils/authTokens";

import { AuthService } from "@Services/auth";
import { errorCatch } from "@Services/authHelper";
import { AUTH_STEP } from "@constants/url";

/* register */
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return await AuthService.main(AUTH_STEP.REGISTER, data);
      // return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

/* login */
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  "auth/login",
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main(AUTH_STEP.LOGIN, data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

/* logout */
export const logout = createAsyncThunk("auth/logout", async () => {
  removeFromStorage();
});

/* checkAuth */
export const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/check-auth",
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      if (errorCatch(error) === "jwt expired") {
        thunkApi.dispatch(logout());
      }

      return thunkApi.rejectWithValue(error);
    }
  },
);
