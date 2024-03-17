import { styled } from "@mui/material/styles";

export const SCartItem = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "16px 0",
  borderBottom: `1px solid ${palette.uncategorized.border}`,
}));

export const SCartItemWide = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  padding: "16px 0",
  borderBottom: `1px solid ${palette.uncategorized.border}`,
}));

export const SCartItemTop = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",

  "& img": {
    borderRadius: "6px",
  },
}));

export const SCartItemContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "4px",
  height: "100%",
}));
export const SCartItemActions = styled("div")(() => ({
  display: "flex",
  gap: "12px",
}));

export const SCartItemWideActions = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: "12px",
}));
