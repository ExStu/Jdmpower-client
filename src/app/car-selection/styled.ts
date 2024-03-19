"use client";

import { styled } from "@mui/material/styles";

export const SCarSelectionBg = styled("div")(({ theme: { palette } }) => ({
  backgroundColor: palette.uncategorized.background,
}));

export const SCarSelection = styled("section")(() => ({
  padding: "60px 0",
}));

export const SCarSelectionWrap = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
}));
