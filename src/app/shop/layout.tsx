import { ReactNode } from "react";

import { SShop, SShopBg } from "./styled";

export const metadata = {
  title: "JdmPower | Каталог магазина",
  description: "Каталог всех запчастей и тюнинга магазина JdmPower",
};

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SShopBg>
      <SShop>{children}</SShop>
    </SShopBg>
  );
};

export default ShopLayout;
