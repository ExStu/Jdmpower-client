import { CurrencyResponseDto } from "@redux/rtk/CurrenciesApi/types";

export interface ICurrencyInitial {
  item: CurrencyResponseDto | undefined;
}
