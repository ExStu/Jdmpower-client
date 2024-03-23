import { ProductSortEnum } from "@redux/rtk/ProductsApi/types";

export const sortMap: Record<ProductSortEnum, string> = {
  "high-price": "Сначала дорогие",
  "low-price": "Сначала дешёвые",
  newest: "Новинки",
  oldest: "Старые",
};
