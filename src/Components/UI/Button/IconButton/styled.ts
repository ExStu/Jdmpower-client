import IconButton, { iconButtonClasses } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const SIconButton = styled(IconButton, {
  shouldForwardProp: (props) => props !== "variant",
})(({ theme: { palette }, variant = "solid" }) => ({
  [`&.${iconButtonClasses.root}`]: {
    height: "48px",
    width: "48px",
  },
  ...(variant === "contained" && {
    borderRadius: "4px",
    backgroundColor: palette.primary.main,
    color: palette.uncategorized.white,
    "&:hover, &:focus-visible": {
      background: palette.primary.light,
    },
    "&:active": {
      background: palette.primary.dark,
    },
  }),
  ...(variant === "outlined" && {
    borderRadius: "50%",
    border: `1px solid ${palette.uncategorized.border}`,
    backgroundColor: "transparent",
    color: palette.text.primary,
    "&:hover, &:focus-visible": {
      backgroundColor: palette.primary.light,
      svg: {
        path: {
          fill: palette.uncategorized.white,
        },
      },
    },
    "&:active": {
      background: palette.primary.dark,
      svg: {
        path: {
          fill: palette.uncategorized.white,
        },
      },
    },
  }),

  ...(variant === "text" && {
    borderRadius: "none",
    border: "none",
    color: palette.primary.main,
    backgroundColor: "transparent",
    svg: {
      path: {
        fill: palette.secondary.main,
      },
    },
    "&:hover, &:focus-visible": {
      backgroundColor: "transparent",
      svg: {
        path: {
          fill: palette.primary.main,
        },
      },
    },
    "&:active": {
      backgroundColor: "transparent",
      svg: {
        path: {
          fill: palette.primary.dark,
        },
      },
    },
  }),

  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: palette.grey[50],
    border: "none",
    color: palette.text.disabled,
    svg: {
      path: {
        fill: palette.text.disabled,
      },
    },
  },

  [`&.${iconButtonClasses.sizeMedium}`]: {
    height: ["32px", "40px"],
    width: ["32px", "40px"],
    minWidth: ["32px", "40px"],
  },

  [`&.${iconButtonClasses.sizeLarge}`]: {
    height: "48px",
    width: "48px",
  },
}));
