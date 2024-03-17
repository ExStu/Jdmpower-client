import React from "react";

import { SAboutUs } from "./styled";

export const metadata = {
  title: "JdmPower | О нас",
  description: "О магазине JdmPower, наши точки и карта",
};

const AboutUsLayout = ({ children }: { children: React.ReactNode }) => {
  return <SAboutUs>{children}</SAboutUs>;
};

export default AboutUsLayout;
