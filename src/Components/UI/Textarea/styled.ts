import { styled } from "@mui/material/styles";

import { TextFieldBase } from "../TextField";

export const STextarea = styled(TextFieldBase)(() => ({
  border: "none",
  outline: "none",
  resize: "none",
}));

export const STextareaFormWrap = styled("div")(({ theme: { palette } }) => ({
  borderRadius: "12px",
  border: `1px solid ${palette.uncategorized.border}`,
  padding: "16px",
  background: palette.common.white,
}));

export const STextareaFormDivider = styled("div")(
  ({ theme: { palette, components } }) => ({
    height: "1px",
    width: "100%",
    margin: "16px 0",
    borderBottom: `1px solid ${palette.uncategorized.border}`,
  }),
);
export const STextareaFormFooter = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  gap: "8px",
}));
