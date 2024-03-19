import type { FC } from "react";

import type { FormControlLabelProps } from "@mui/material/FormControlLabel";

import { SFormControlLabel } from "./styled";

const FormControlLabel: FC<FormControlLabelProps> = (props) => (
  <SFormControlLabel {...props} />
);
export { FormControlLabel };
