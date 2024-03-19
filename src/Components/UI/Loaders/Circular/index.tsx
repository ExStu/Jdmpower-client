import { FC } from "react";

import { CircularProgressProps } from "@mui/material";

import { SCircularLoader, SContentLoaderBox } from "./styled";

const CircularLoader: FC<CircularProgressProps> = (props) => (
  <SContentLoaderBox>
    <SCircularLoader {...props} />
  </SContentLoaderBox>
);

export default CircularLoader;
