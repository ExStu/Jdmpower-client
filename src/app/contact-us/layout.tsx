import React from "react";

import { SContactUs, SContactUsBg } from "./styled";

export const metadata = {
  title: "JdmPower | Контакты",
  description: "Контакты и обратная связь магазина JdmPower",
};

const ContactUsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SContactUsBg>
      <SContactUs>{children}</SContactUs>
    </SContactUsBg>
  );
};

export default ContactUsLayout;
