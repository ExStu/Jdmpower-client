"use client";

import { styled } from "@mui/material/styles";

import ListItem from "@Components/UI/List/ListItem";
import Typography from "@Components/UI/Typography";

export const SContactUsBg = styled("div")(({ theme: { palette } }) => ({
  backgroundColor: palette.uncategorized.background,
}));

export const SContactUs = styled("section")(() => ({
  padding: "60px 0",
}));

export const SContactUsColumnWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  gap: "32px",
  padding: "24px",
  backgroundColor: palette.common.white,
  borderRadius: "12px",
}));

export const SContactUsColumn = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "695px",
}));

export const SContactUsTitle = styled(Typography)(() => ({
  marginBottom: "24px",
}));

export const SContactUsDisclaimer = styled(Typography)(() => ({
  marginBottom: "20px",
}));

export const SContactUsContactItem = styled(ListItem)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export const SContactUsForm = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
