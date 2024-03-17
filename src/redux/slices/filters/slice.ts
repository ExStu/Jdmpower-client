// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//
// import { ProductSortEnum } from "@redux/rtk/ProductsApi/types";
//
// import { IFiltersActionsPayload, IFiltersState } from "./types";
//
// const initialState: IFiltersState = {
//   isFilterUpdated: false,
//   body: {
//     sort: ProductSortEnum.NEWEST,
//     searchTerm: "",
//     minPrice: 0,
//     maxPrice: 99999,
//     category: null,
//     manufacture: null,
//     generation: null,
//     pageNumber: 1,
//     perPage: 10,
//     // ratings: "",
//   },
// };
//
// export const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     updateBody: (state, action: PayloadAction<IFiltersActionsPayload>) => {
//       const { key, value } = action.payload;
//       state.body[key] = value;
//       state.isFilterUpdated = true;
//     },
//     resetFilters: (state) => {
//       state.isFilterUpdated = false;
//     },
//   },
// });
