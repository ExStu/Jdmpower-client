import type { FC } from "react";
import React from "react";

import type { LoadingButtonProps } from "@mui/lab/LoadingButton";

import { SButton } from "./styled";

const Button: FC<LoadingButtonProps> = ({ variant = "contained", ...props }) => (
  <SButton {...props} variant={variant} disableElevation />
);

export default Button;
