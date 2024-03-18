import React from "react";

import { SCarSelection } from "./styled";

export const metadata = {
  title: "JdmPower | Поиск товаров по машине",
  description: "Выбор товаров по машине, модели и поколению в магазине JdmPower",
};

const CarSelectionLayout = ({ children }: { children: React.ReactNode }) => {
  return <SCarSelection>{children}</SCarSelection>;
};

export default CarSelectionLayout;
