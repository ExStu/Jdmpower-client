import { styled } from "@mui/material/styles";

export const SPriceRange = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
}));

export const SPriceRangeSliderWrap = styled("div")(() => ({
  width: "95%",
}));

export const SPriceRangeMarks = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  width: "100%",
}));
