import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { jdmpowerApi } from "@redux/api";

import { carSelectionSlice } from "@slices/carSelection";
import { cartSlice } from "@slices/cart";
import { currencySlice } from "@slices/currency";
import { userSlice } from "@slices/user";

const isClient = typeof window !== "undefined";

const combinedReducers = combineReducers({
  cart: cartSlice.reducer,
  currency: currencySlice.reducer,
  carSelection: carSelectionSlice.reducer,
  user: userSlice.reducer,
  // filters: filtersSlice.reducer,
  [jdmpowerApi.reducerPath]: jdmpowerApi.reducer,
});

let mainReducers = combinedReducers;

if (isClient) {
  const { persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "jdmpower",
    storage,
    whitelist: ["cart"],
  };

  mainReducers = persistReducer(persistConfig, combinedReducers);
}

export const store = configureStore({
  reducer: mainReducers,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return middleware.concat(jdmpowerApi.middleware);
  },
});

export const persistor = persistStore(store);
export default store;

export type TypeRootState = ReturnType<typeof mainReducers>;
export type AppDispatch = typeof store.dispatch;
