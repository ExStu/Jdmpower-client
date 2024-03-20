import { Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

import type { ICheckbox } from "./types";

export const SCheckbox = styled(Checkbox)<ICheckbox>(({ size }) => ({
  padding: 0,
  width: size === "small" ? 20 : 24,
  height: size === "small" ? 20 : 24,
}));

export const SCheckboxIcon = styled("span")<ICheckbox>(
  ({ error, theme: { palette }, size }) => ({
    boxSizing: "border-box",
    borderRadius: 4,
    width: size === "small" ? 20 : 24,
    height: size === "small" ? 20 : 24,
    border: error
      ? `1px solid ${palette.error.main}`
      : `1px solid ${palette.grey[100]}`,
    backgroundColor: palette.uncategorized.white,
    transition: "border-color .1s ease-in",
    "input:hover ~ &": {
      borderColor: !error ? palette.primary.main : "",
    },
    "input:disabled ~ &": {
      border: `1px solid ${palette.grey[50]}`,
    },
  }),
);

export const SCheckedCheckboxIcon = styled(SCheckboxIcon)<ICheckbox>(
  ({ error, theme: { palette }, size }) => ({
    boxSizing: "border-box",
    borderRadius: 4,
    width: size === "small" ? 20 : 24,
    height: size === "small" ? 20 : 24,
    border: error
      ? `1px solid ${palette.error.main}`
      : `1px solid ${palette.primary.main}`,
    backgroundColor: error ? palette.error.main : palette.primary.main,
    backgroundImage: "url('/icons/checkIcon/default.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: size === "small" ? "auto" : "12px auto",
    transition: "background-color .1s ease-in",
    "input:hover ~ &": {
      border: !error
        ? `1px solid ${palette.primary.dark}`
        : `1px solid ${palette.error.main}`,
      backgroundColor: !error ? palette.primary.dark : "",
    },
    "input:disabled ~ &": {
      border: "1px solid transparent",
      backgroundColor: palette.grey[50],
    },
  }),
);
