"use client";

import { FC } from "react";

import HeaderBottom from "./Bottom";
import HeaderMiddle from "./Middle";
import HeaderTop from "./Top";
import { SHeader } from "./styled";

const Header: FC = () => {
  return (
    <SHeader>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </SHeader>
  );
};

export default Header;
