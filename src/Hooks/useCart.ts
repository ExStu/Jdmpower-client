import { getCartItems } from "@redux/selectors";

import { useAppSelector } from "@Hooks/useRedux";

export const useCart = () => {
  const cartItems = useAppSelector(getCartItems);

  const discountTotal = cartItems.reduce(
    (acc, item) =>
      acc + item.product.price * (1 - item.product.discount / 100) * item.quantity,
    0,
  );

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  const totalDelta = total - discountTotal;

  return { cartItems, total, discountTotal, totalDelta };
};
