import type { FC } from "react";

import type { TextFieldProps } from "@mui/material/TextField";

import {
  STextarea,
  STextareaFormDivider,
  STextareaFormFooter,
  STextareaFormWrap,
} from "./styled";

const Textarea: FC<TextFieldProps> = ({ ...props }) => (
  <STextarea
    multiline
    variant="standard"
    sx={{
      width: "100%",
    }}
    {...props}
  />
);
export default Textarea;

export { STextareaFormWrap, STextareaFormDivider, STextareaFormFooter };
