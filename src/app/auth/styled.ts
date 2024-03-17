import { styled } from "@mui/material/styles";

export const SAuthWrap = styled("form")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
  marginTop: "60px",
  border: `1px solid ${palette.uncategorized.border}`,
}));
