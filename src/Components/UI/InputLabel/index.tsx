import type { FC } from "react";

import type { InputLabelProps } from "@mui/material/InputLabel";

import { SInputLabel } from "./styled";

const InputLabel: FC<InputLabelProps> = (props) => <SInputLabel {...props} />;
export default InputLabel;
