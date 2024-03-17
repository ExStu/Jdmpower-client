import { IUserState } from "@redux/rtk/AuthApi/types";

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}
