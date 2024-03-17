import FormHelperText from "@mui/material/FormHelperText";
import { styled } from "@mui/material/styles";

import mq from "@themes/breakpoints";

export const SFormHelperText = styled(FormHelperText)(() =>
  mq({
    margin: "4px 16px 0",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "16px",
  }),
);
