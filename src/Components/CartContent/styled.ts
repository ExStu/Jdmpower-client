import { styled } from "@mui/material/styles";

export const SCartContent = styled("div")(({ theme: { palette } }) => ({
  width: "350px",
  backgroundColor: palette.uncategorized.white,
  padding: "12px 24px",
}));

export const SCartTop = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const SCartEmptyWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  paddingTop: "20px",
}));

export const SCartWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

export const SCartItemsWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const SCartBottom = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
}));

export const SCartBottomButtons = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));
