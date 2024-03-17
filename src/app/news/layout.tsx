import React from "react";

import { SNews } from "./styled";

export const metadata = {
  title: "JdmPower | Новости",
  description: "Новости магазина JdmPower",
};

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  return <SNews>{children}</SNews>;
};

export default NewsLayout;
