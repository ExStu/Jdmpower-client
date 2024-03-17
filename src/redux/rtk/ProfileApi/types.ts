import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";

export interface ProfileResponseDto {
  id: number;
  email: string;
  name: string;
  surname: string;
  middleName: string;
  avatarPath: string;
  phone: string;
  isAdmin: boolean;
  favorites: ProductResponseDto[];
}
