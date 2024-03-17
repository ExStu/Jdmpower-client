import { outlinedInputClasses } from "@mui/material";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { filledInputClasses } from "@mui/material/FilledInput";
import { formHelperTextClasses } from "@mui/material/FormHelperText";
import { iconButtonClasses } from "@mui/material/IconButton";
import { inputAdornmentClasses } from "@mui/material/InputAdornment";
import { inputLabelClasses } from "@mui/material/InputLabel";
import type { TextFieldProps } from "@mui/material/TextField";
import TextField, { textFieldClasses } from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import mq from "@themes/breakpoints";

export const STextField = styled(TextField)<TextFieldProps>(
  ({ theme: { palette } }) =>
    mq({
      [`&.${textFieldClasses.root}`]: {
        [`& .${inputLabelClasses.root}`]: {
          top: "2px",
          left: "-1 px",
          fontSize: ["14px", "16px"],
          lineHeight: "20px",
          color: palette.text.secondary,
          [`&.${inputLabelClasses.shrink}`]: {
            fontSize: "16px",
            lineHeight: "16px",
          },
          [`&.${inputLabelClasses.disabled}`]: {
            color: palette.text.disabled,
            left: "4px",
          },
        },
        [`& .${inputLabelClasses.sizeSmall}`]: {
          top: "1px",
          left: "4px",
          [`&.${inputLabelClasses.shrink}`]: {
            top: "2px",
          },
        },
        [`& .${formHelperTextClasses.root}`]: {
          margin: "4px 16px 0",
          fontSize: "12px",
          fontWeight: 400,
          lineHeight: "16px",
        },

        [`& .${inputAdornmentClasses.positionEnd}`]: {
          position: "absolute",
          right: "9px",
          top: "calc(50% - 15px)",
          [`& .${iconButtonClasses.root}`]: {
            visibility: "hidden",
            "&:hover, &:focus-visible": {
              background: palette.primary.background,
              "@media (hover:none)": {
                background: "transparent",
              },
            },
          },
        },

        // input
        [`& .${filledInputClasses.root}`]: {
          [`& .${filledInputClasses.input}`]: {
            fontSize: ["14px", "16px"],
            lineHeight: "20px",
            padding: "26px 47px 8px 15px",
            "&:-webkit-autofill": {
              borderRadius: "initial",
            },
          },
          [`& .${filledInputClasses.inputSizeSmall}`]: {
            padding: "21px 47px 5px 15px",
          },
          [`&.${filledInputClasses.disabled}`]: {
            [`& .${filledInputClasses.input}`]: {
              padding: "27px 48px 9px 16px",
            },
            [`& .${filledInputClasses.inputSizeSmall}`]: {
              padding: "22px 48px 6px 16px",
            },
          },
        },

        [`& .${filledInputClasses.adornedEnd}`]: {
          paddingRight: 0,
          [`& .${filledInputClasses.input}`]: {
            fontSize: ["14px", "16px"],
            paddingLeft: "15px",
            paddingRight: "47px",
          },
          [`&.${filledInputClasses.focused}, &:hover`]: {
            [`& .${inputAdornmentClasses.positionEnd}`]: {
              [`& .${iconButtonClasses.root}`]: {
                visibility: "visible",
              },
            },
          },
        },

        // textarea
        [`& .${filledInputClasses.multiline}`]: {
          padding: 0,
          [`&.${autocompleteClasses.inputRoot}`]: {
            padding: 0,
          },
          // [`&.${filledInputClasses.adornedEnd}`]: {
          [`& .${filledInputClasses.input}`]: {
            fontSize: ["14px", "16px"],
            padding: "26px 47px 8px 15px",
          },
          [`& .${filledInputClasses.inputSizeSmall}`]: {
            padding: "21px 47px 5px 15px",
          },
          // },
        },

        // autocomplete
        [`& .${autocompleteClasses.inputRoot}`]: {
          [`& .${autocompleteClasses.endAdornment}`]: {
            width: "30px",
            top: "calc(50% - 15px)",
          },
          [`&.${autocompleteClasses.hasClearIcon}`]: {
            [`& .${outlinedInputClasses.root}`]: {
              paddingRight: 0,
            },
          },
          [`& .${autocompleteClasses.hasClearIcon}`]: {
            [`&.${filledInputClasses.root}`]: {
              paddingRight: 0,
            },
          },
          [`& .${autocompleteClasses.clearIndicator}`]: {
            padding: "5px",
            "&:hover, &:focus-visible": {
              background: palette.primary.background,
              "@media (hover:none)": {
                background: "transparent",
              },
            },
          },

          [`& .${filledInputClasses.input}`]: {
            fontSize: ["14px", "16px"],
            padding: "26px 47px 8px 15px",
          },
          [`& .${filledInputClasses.inputSizeSmall}`]: {
            padding: "21px 47px 5px 15px",
          },

          [`& .${filledInputClasses.inputMultiline}`]: {
            [`& .${filledInputClasses.input}`]: {
              fontSize: ["14px", "16px"],
              padding: "26px 47px 8px 15px",
            },
            [`& .${filledInputClasses.inputSizeSmall}`]: {
              padding: "21px 47px 5px 15px",
            },
          },
          [`& .${filledInputClasses.root}`]: {
            padding: 0,
          },
        },
      },
    }),
);

export const TextFieldBase = styled(TextField)<TextFieldProps>(
  ({ theme: { palette }, variant, InputProps }) => ({
    color: palette.secondary.main,
    "&>.MuiInput-root": {
      border: "none",
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
    },
    "& .MuiInputBase-input.Mui-readOnly": {
      padding: 0,
      textAlign: "center",
    },
    "& fieldset": {
      border: "none",
    },
    // maxWidth: "50px",
  }),
);
