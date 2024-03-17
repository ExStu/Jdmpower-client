"use client";

import { styled } from "@mui/material/styles";

export const SNews = styled("section")(() => ({
  padding: "60px 0",
}));

export const SNewsList = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "32px",
}));
