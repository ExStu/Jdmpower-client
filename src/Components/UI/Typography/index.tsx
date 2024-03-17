import type { FC } from "react";

import { TypographyProps } from "@mui/material";

import { STypography } from "./styled";

const Typography: FC<TypographyProps> = (props) => (
  <STypography color={props.color} {...props} />
);

export default Typography;
