import { styled } from "@mui/material/styles";

export const SFooter = styled("footer")(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
}));

export const SFooterTop = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 0",
}));

export const SFooterTopLinks = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));
