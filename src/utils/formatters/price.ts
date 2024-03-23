import { CurrencyResponseDto } from "@redux/rtk/CurrenciesApi/types";

export const currencyFormat = (currency: string) => {
  const currencyMap: Record<string, string> = {
    USD: "$",
    RUB: "₽",
    EUR: "€",
  };
  return currencyMap[currency] || currency;
};

export const addCurrencyToPrice = (
  productPrice: number,
  currency: CurrencyResponseDto,
) => {
  return `${productPrice.toLocaleString("ru-RU")} ${currencyFormat(currency.name)}`;
};

export const getPriceNumber = (productPrice: number, currencyValue: number) => {
  return Number((productPrice * currencyValue).toFixed(2));
};

export const getPrice = (productPrice: number, currencyValue: number) => {
  return Number((productPrice * currencyValue).toFixed(2)).toLocaleString("ru-RU");
};

export const getPriceWithCurrency = (
  productPrice: number,
  currency: CurrencyResponseDto,
) => {
  return `${getPrice(productPrice, currency.value)} ${currencyFormat(currency.name)}`;
};

export const getPriceQuantityWithCurrency = (
  price: number,
  quantity: number,
  currency: CurrencyResponseDto,
) => {
  const totalPrice = price * quantity;
  return getPriceWithCurrency(totalPrice, currency);
};

export const getPriceQuantityDiscountedWithCurrency = (
  price: number,
  discount: number,
  quantity: number,
  currency: CurrencyResponseDto,
) => {
  const totalPrice = price * (1 - discount / 100) * quantity;
  return getPriceWithCurrency(totalPrice, currency);
};

export const getPriceDiscountedWithCurrency = (
  price: number,
  discount: number,
  currency: CurrencyResponseDto,
) => {
  const totalPrice = price * (1 - discount / 100);
  return getPriceWithCurrency(totalPrice, currency);
};
