import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GenerationResponseDto } from "@redux/rtk/GenerationsApi/types";

import { ICarSelectionInitial } from "./types";

const initialState: ICarSelectionInitial = {
  item: undefined,
};

export const carSelectionSlice = createSlice({
  initialState,
  name: "carSelection",
  reducers: {
    setActiveCar: (state, { payload }: PayloadAction<GenerationResponseDto>) => {
      state.item = payload;
    },
    resetCarSelection: () => initialState,
  },
});
