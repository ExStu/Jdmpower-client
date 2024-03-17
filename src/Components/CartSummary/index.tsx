import { FC } from "react";

import { getActiveCurrency } from "@redux/selectors";

import { useTheme } from "@mui/material";

import Typography from "@Components/UI/Typography";

import { getPriceWithCurrency } from "@utils/formatters/price";

import { SCartSummary, SCartSummaryWrap } from "./styled";

import { useCart } from "@Hooks/useCart";
import { useAppSelector } from "@Hooks/useRedux";

const CartSummary: FC = () => {
  const { palette } = useTheme();
  const activeCurrency = useAppSelector(getActiveCurrency);
  const { total, discountTotal, totalDelta, cartItems } = useCart();

  return (
    activeCurrency && (
      <SCartSummary>
        <SCartSummaryWrap>
          <Typography>Итого :</Typography>
          <Typography variant="bodyS2">
            {getPriceWithCurrency(total, activeCurrency)}
          </Typography>
        </SCartSummaryWrap>
        <SCartSummaryWrap>
          <Typography>Скидка :</Typography>
          <Typography variant="bodyS2" color={palette.primary.light}>
            {getPriceWithCurrency(totalDelta, activeCurrency)}
          </Typography>
        </SCartSummaryWrap>
        <SCartSummaryWrap>
          <Typography>С учетом скидок :</Typography>
          <Typography variant="bodyS2">
            {getPriceWithCurrency(discountTotal, activeCurrency)}
          </Typography>
        </SCartSummaryWrap>
      </SCartSummary>
    )
  );
};

export default CartSummary;
