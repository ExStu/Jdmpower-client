"use client";

import { styled } from "@mui/material/styles";

import bg from "../../../public/images/car-selection-bg.webp";

export const SShopBg = styled("div")(({ theme: { palette } }) => ({
  backgroundColor: palette.uncategorized.background,
}));
export const SShop = styled("section")(() => ({
  padding: "60px 0",
}));

export const SColumnsLayoutMainWrap = styled("div")(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  gap: "20px",
}));

export const SColumnsLayoutPrimaryWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flex: "1 2 60%",
  width: "calc(100% - 380px)",
  maxWidth: "1026px",
}));

export const SColumnsLayoutSecondaryWrap = styled("div")(() => ({
  maxWidth: "400px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  flex: "1 0 380px",
}));

export const SSecondaryLayoutWrap = styled("div")(({ theme: { palette } }) => ({
  position: "sticky",
  top: "20px",
  padding: "20px",
  backgroundColor: palette.common.white,
  borderRadius: "12px",
}));

export const SPrimaryLayoutWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

export const SFiltersTitle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "20px 0",

  "&:first-of-type": {
    paddingTop: 0,
  },
}));

export const SCarSelectionWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  // border: `1px solid ${palette.uncategorized.border}`,
  borderRadius: "12px",
  overflow: "hidden",
}));

export const SCarSelectionContentWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "20px 40px",
  gap: "12px",
  width: "100%",
  height: "100%",
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 100%, rgba(0, 0, 0, 0.3) 0%), url(${bg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  "& p": {
    color: palette.common.white,
  },
}));

export const SProductsWrap = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "20px",
}));
