import { TypeRootState } from "./store";

export const getActiveCurrency = (state: TypeRootState) => state.currency.item;

export const getActiveCarSelected = (state: TypeRootState) =>
  state.carSelection.item;

export const getCartItems = (state: TypeRootState) => state.cart.items;

export const getAuthUser = (state: TypeRootState) => state.user;
