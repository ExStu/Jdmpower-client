import { FC } from "react";

import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";
import { getActiveCurrency } from "@redux/selectors";

import { useTheme } from "@mui/material";

import Typography from "@Components/UI/Typography";

import {
  getPriceDiscountedWithCurrency,
  getPriceQuantityDiscountedWithCurrency,
  getPriceQuantityWithCurrency,
  getPriceWithCurrency,
} from "@utils/formatters/price";

import { SPriceCrossed, SPriceInitialPrice, SPriceWithDiscount } from "./styled";

import { useAppSelector } from "@Hooks/useRedux";

interface IPriceWithDiscount {
  direction: "row" | "column";
  item: ProductResponseDto;
  quantity?: number;
}

const PriceWithDiscount: FC<IPriceWithDiscount> = ({
  direction,
  item,
  quantity,
}) => {
  const { palette } = useTheme();
  const activeCurrency = useAppSelector(getActiveCurrency);

  return (
    activeCurrency && (
      <SPriceWithDiscount direction={direction}>
        {item.discount > 0 && (
          <Typography variant="bodyS3" color={palette.primary.light}>
            {quantity
              ? getPriceQuantityDiscountedWithCurrency(
                  item.price,
                  item.discount,
                  quantity,
                  activeCurrency,
                )
              : getPriceDiscountedWithCurrency(
                  item.price,
                  item.discount,
                  activeCurrency,
                )}
          </Typography>
        )}
        <SPriceInitialPrice
          hasDiscount={item.discount > 0}
          variant="bodyS2"
          direction={direction}
        >
          {quantity
            ? getPriceQuantityWithCurrency(item.price, quantity, activeCurrency)
            : getPriceWithCurrency(item.price, activeCurrency)}
          {item.discount > 0 && <SPriceCrossed />}
        </SPriceInitialPrice>
      </SPriceWithDiscount>
    )
  );
};

export default PriceWithDiscount;
