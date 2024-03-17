import React from "react";

import { SShop } from "./styled";

export const metadata = {
  title: "JdmPower | Каталог магазина",
  description: "Каталог всех запчастей и тюнинга магазина JdmPower",
};

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
  return <SShop>{children}</SShop>;
};

export default ShopLayout;
