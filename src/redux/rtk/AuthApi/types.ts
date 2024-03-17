import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  middleName: string;
  avatarPath: string;
  phone: string;
  isAdmin: boolean;
}

export interface IFullUser extends IUser {
  favorites: ProductResponseDto[];
}

export interface IUserState {
  email: string;
  isAdmin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
