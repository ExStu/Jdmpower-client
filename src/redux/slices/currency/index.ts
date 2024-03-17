import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrencyResponseDto } from "@redux/rtk/CurrenciesApi/types";

import { ICurrencyInitial } from "./types";

const initialState: ICurrencyInitial = {
  item: undefined,
};

export const currencySlice = createSlice({
  initialState,
  name: "currency",
  reducers: {
    setActive: (state, { payload }: PayloadAction<CurrencyResponseDto>) => {
      state.item = payload;
    },
    resetCurrency: () => initialState,
  },
});
