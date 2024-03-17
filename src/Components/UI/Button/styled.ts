"use client";

import LoadingButton, { loadingButtonClasses } from "@mui/lab/LoadingButton";
import { buttonClasses } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const SButton = styled(LoadingButton)(
  ({ theme: { palette }, size = "large", fullWidth, loading }) => ({
    padding: "12px 14px",
    fontSize: "14px",
    height: "48px",
    fontWeight: 500,
    lineHeight: "20px",
    borderRadius: "4px",
    width: fullWidth ? "100%" : "fit-content",
    transition: "color .12s ease-in, background-color .12s ease-in",

    [`&.${buttonClasses.contained}`]: {
      backgroundColor: palette.primary.main,
      color: palette.uncategorized.white,
      "&:hover, &:focus-visible": {
        backgroundColor: loading ? palette.grey[50] : palette.primary.light,
      },
      "&:active": {
        backgroundColor: palette.primary.dark,
      },
    },

    [`&.${buttonClasses.outlined}`]: {
      border: "none",
      backgroundColor: palette.secondary.background,
      color: palette.text.primary,
      "&:hover, &:focus-visible": {
        backgroundColor: palette.secondary.light,
      },
      "&:active": {
        backgroundColor: palette.secondary.light,
      },
    },

    [`&.${buttonClasses.text}`]: {
      height: "auto",
      padding: 0,
      lineHeight: 0,
      color: palette.primary.main,
      backgroundColor: "transparent",
      "&:hover, &:focus-visible": {
        color: palette.primary.light,
      },
      "&:active": {
        color: palette.primary.dark,
      },
    },

    [`&.${buttonClasses.disabled}`]: {
      backgroundColor: palette.grey[50],
      border: "none",
      color: palette.text.disabled,
    },

    [`.${loadingButtonClasses.loadingIndicator}`]: {
      position: "static",
      marginRight: ["4px", "8px"],
    },

    [`.${buttonClasses.startIcon}`]: {
      marginRight: ["4px", "8px"],
      marginLeft: "0px",
    },

    [`.${buttonClasses.endIcon}`]: {
      marginRight: "0px",
      marginLeft: ["4px", "8px"],
    },

    ...(size === "medium" && {
      padding: ["6px 16px", "10px 16px"],
      height: ["32px", "40px"],
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "20px",
    }),
  }),
);
