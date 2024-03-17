import { cartSlice } from "@slices/cart";
import { currencySlice } from "@slices/currency";
import * as userActions from "@slices/user/actions";

export const rootActions = {
  ...userActions,
  ...cartSlice.actions,
  ...currencySlice.actions,
  // ...filtersSlice.actions,
};
