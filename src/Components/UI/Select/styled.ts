import { menuItemClasses } from "@mui/material/MenuItem";
import { popoverClasses } from "@mui/material/Popover";
import MuiSelect, { selectClasses } from "@mui/material/Select";
import { styled } from "@mui/material/styles";

import mq from "@themes/breakpoints";

export const SSelect = styled(MuiSelect, {
  shouldForwardProp: (prop) => prop !== "helperText",
})(({ theme: { palette } }) =>
  mq({
    [`& .${selectClasses.select}.MuiInputBase-input`]: {
      whiteSpace: "normal",
      padding: "8px 8px 8px 4px",
      minHeight: "20px",
      fontSize: ["14px", "16px"],
      lineHeight: "20px",
      color: palette.uncategorized.white,
      borderColor: palette.uncategorized.white,
    },
    "&:hover": {
      borderColor: palette.uncategorized.white,
    },
    [`&.${selectClasses.error}`]: {
      "&:hover": {
        borderColor: palette.error.main,
      },
    },
    "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
      borderColor: palette.grey[100],
    },
    [`& .${popoverClasses.root}`]: {
      [`& .${popoverClasses.paper}`]: {
        boxShadow: "none",
        borderRadius: "12px",
        border: `1px solid ${palette.uncategorized.border}`,
        marginTop: "4px",

        [`& .${menuItemClasses.root}`]: {
          whiteSpace: "normal",
        },
        [`& .${menuItemClasses.root}:hover`]: {
          backgroundColor: palette.secondary.main,
        },
        [`& .${menuItemClasses.selected}`]: {
          backgroundColor: palette.secondary.main,
        },
      },
    },
    [`&.${selectClasses.disabled}`]: {
      [`& .${selectClasses.icon}`]: {
        path: {
          stroke: palette.uncategorized.white,
        },
      },
      border: "none",
    },
    [`& .${selectClasses.icon}`]: {
      width: ["16px", "20px"],
      height: ["16px", "20px"],
      top: ["calc(50% - 8px)", "calc(50% - 10px)"],
      right: "14px",
      color: palette.uncategorized.white,
    },
  }),
);
