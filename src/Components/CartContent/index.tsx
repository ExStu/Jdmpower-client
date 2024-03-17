import { FC } from "react";

import { useRouter } from "next/navigation";

import CloseIcon from "@mui/icons-material/Close";

import CartItemSmall from "@Components/CartItem/CartItemSmall";
import CartSummary from "@Components/CartSummary";
import Button from "@Components/UI/Button";
import IconButton from "@Components/UI/Button/IconButton";
import Divider from "@Components/UI/Divider";
import Typography from "@Components/UI/Typography";

import {
  SCartBottom,
  SCartBottomButtons,
  SCartContent,
  SCartEmptyWrap,
  SCartItemsWrap,
  SCartTop,
  SCartWrap,
} from "./styled";

import { useCart } from "@Hooks/useCart";

interface ICardContent {
  toggleDrawer: () => void;
}

const CartContent: FC<ICardContent> = ({ toggleDrawer }) => {
  const router = useRouter();
  const { cartItems } = useCart();

  const handleRouteChange = (route: string) => {
    router.push(route);
    toggleDrawer();
  };

  return (
    <SCartContent>
      <SCartTop>
        <Typography variant="h4">Корзина</Typography>
        <IconButton onClick={toggleDrawer} variant="text">
          <CloseIcon />
        </IconButton>
      </SCartTop>
      <Divider />
      {cartItems.length === 0 ? (
        <SCartEmptyWrap>
          <Typography variant="bodyS1">Нет товаров в корзине</Typography>
          <Button onClick={() => handleRouteChange("/shop")}>
            Перейти в магазин
          </Button>
        </SCartEmptyWrap>
      ) : (
        <SCartWrap>
          <SCartItemsWrap>
            {cartItems.map((item) => (
              <CartItemSmall key={item.product.id} item={item} />
            ))}
          </SCartItemsWrap>
          <SCartBottom>
            <CartSummary />
            <SCartBottomButtons>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => handleRouteChange("/cart")}
              >
                Посмотреть корзину
              </Button>
              <Button fullWidth onClick={() => handleRouteChange("/checkout")}>
                Оформить заказ
              </Button>
            </SCartBottomButtons>
          </SCartBottom>
        </SCartWrap>
      )}
    </SCartContent>
  );
};

export default CartContent;
