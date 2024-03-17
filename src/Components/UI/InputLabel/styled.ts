import MUIInputLabel, { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

import mq from "@themes/breakpoints";

export const SInputLabel = styled(MUIInputLabel)(({ theme: { palette } }) =>
  mq({
    [`&.${inputLabelClasses.root}`]: {
      top: "2px",
      left: "4px",
      fontSize: ["14px", "16px"],
      lineHeight: "20px",
      color: palette.text.secondary,
      [`&.${inputLabelClasses.shrink}`]: {
        top: "2px",
        left: "4px",
        fontSize: "16px",
        lineHeight: "16px",
      },
      [`&.${inputLabelClasses.disabled}`]: {
        color: palette.text.disabled,
        top: "2px",
        left: "3px",
      },
    },
  }),
);
