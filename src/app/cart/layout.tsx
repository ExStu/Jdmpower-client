import React from "react";

import { SCart } from "./styled";

export const metadata = {
  title: "JdmPower | Корзина",
  description: "Корзина с товарами в магазине JdmPower",
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return <SCart>{children}</SCart>;
};

export default CartLayout;
