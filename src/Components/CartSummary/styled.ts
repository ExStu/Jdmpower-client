import { styled } from "@mui/material/styles";

export const SCartSummary = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: palette.uncategorized.background,
}));

export const SCartSummaryWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
