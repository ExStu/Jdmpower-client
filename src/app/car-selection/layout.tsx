import React from "react";

import { SCarSelection, SCarSelectionBg } from "./styled";

export const metadata = {
  title: "JdmPower | Поиск товаров по машине",
  description: "Выбор товаров по машине, модели и поколению в магазине JdmPower",
};

const CarSelectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SCarSelectionBg>
      <SCarSelection>{children}</SCarSelection>
    </SCarSelectionBg>
  );
};

export default CarSelectionLayout;
