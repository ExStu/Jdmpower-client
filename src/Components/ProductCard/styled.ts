import { styled } from "@mui/material/styles";

export const SProductCard = styled("div")(({ theme: { palette } }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  backgroundColor: palette.uncategorized.white,
  overflow: "hidden",
}));

export const SProductCardContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "24px",
}));

export const SProductCardActionsWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const SProductCardChipsWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  position: "absolute",
  top: "8px",
  right: "8px",
}));
