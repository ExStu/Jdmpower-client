import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";

export interface ICartItem {
  product: ProductResponseDto;
  quantity: number;
}

export interface ICartInitialState {
  items: ICartItem[];
}

export interface IChangeQuantityPayload {
  type: "minus" | "plus";
  productId: number;
}
