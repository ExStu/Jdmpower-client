import type { FC } from "react";

import type { FormHelperTextProps } from "@mui/material/FormHelperText";

import { SFormHelperText } from "./styled";

const FormHelperText: FC<FormHelperTextProps> = (props) => (
  <SFormHelperText {...props} />
);
export default FormHelperText;
