import { filledInputClasses } from "@mui/material/FilledInput";
import { iconButtonClasses } from "@mui/material/IconButton";
import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import type { TextFieldProps } from "@mui/material/TextField";
import { textFieldClasses } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import TextField from "../TextField";

export const STextField = styled(TextField)<TextFieldProps>(
  ({ theme: { palette }, disabled }) => ({
    [`&.${textFieldClasses.root}`]: {
      [`& .${filledInputClasses.input}`]: {
        paddingLeft: "14px",
        paddingRight: "47px",
      },

      [`& .${inputAdornmentClasses.positionEnd}`]: {
        [`& .${iconButtonClasses.root}`]: {
          visibility: "visible",
          ...(disabled && {
            pointerEvents: "none",
          }),
          "&:hover, &:focus-visible": {
            background: palette.primary.background,
            svg: {
              path: {
                stroke: palette.grey[500],
              },
            },
            "@media (hover:none)": {
              background: "transparent",
            },
          },
        },
      },
    },
  }),
);
