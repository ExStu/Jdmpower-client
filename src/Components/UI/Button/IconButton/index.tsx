import type { FC } from "react";

import { IconButtonProps } from "@mui/material";

import { SIconButton } from "./styled";

const IconButton: FC<IconButtonProps> = ({ size = "large", ...props }) => (
  <SIconButton {...props} size={size} />
);
export default IconButton;
