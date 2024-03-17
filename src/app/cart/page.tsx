"use client";

import { useRouter } from "next/navigation";

import CartItemWide from "@Components/CartItem/CartItemWide";
import CartSummary from "@Components/CartSummary";
import SectionTitle from "@Components/SectionTitle";
import Button from "@Components/UI/Button";
import Container from "@Components/UI/Container";

import { useCart } from "@Hooks/useCart";
import { SCartActions } from "@app/cart/styled";
import {
  SColumnsLayoutMainWrap,
  SColumnsLayoutPrimaryWrap,
  SColumnsLayoutSecondaryWrap,
} from "@shared/ColumnsLayout/styled";

const Cart = () => {
  const router = useRouter();
  const { cartItems } = useCart();

  return (
    <Container>
      <SectionTitle title="Моя корзина" />
      <SColumnsLayoutMainWrap>
        <SColumnsLayoutPrimaryWrap>
          {cartItems.map((item) => (
            <CartItemWide key={item.product.id} item={item} />
          ))}
        </SColumnsLayoutPrimaryWrap>
        <SColumnsLayoutSecondaryWrap>
          <SCartActions>
            <CartSummary />
            <Button fullWidth onClick={() => router.push("/checkout")}>
              Оформить заказ
            </Button>
          </SCartActions>
        </SColumnsLayoutSecondaryWrap>
      </SColumnsLayoutMainWrap>
    </Container>
  );
};

export default Cart;
