import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";

import { ICartInitialState, IChangeQuantityPayload } from "./types";

const initialState: ICartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductResponseDto>) => {
      state.items.push({ product: action.payload, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload.id,
      );
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { type, productId } = action.payload;
      const item = state.items.find((item) => item.product.id === productId);
      if (item && type === "plus") {
        item.quantity += 1;
      } else if (item && type === "minus") {
        item.quantity -= 1;
      }
    },
    reset: (state) => {
      state.items = [];
    },
  },
});
