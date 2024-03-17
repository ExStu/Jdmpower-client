import React from "react";

import { SCheckout } from "./styled";

export const metadata = {
  title: "JdmPower | Оформление заказа",
  description: "Оформление заказа запчастей и тюнинга в магазине JdmPower",
};

const CheckoutLayout = ({ children }: { children: React.ReactNode }) => {
  return <SCheckout>{children}</SCheckout>;
};

export default CheckoutLayout;
