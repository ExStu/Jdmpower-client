import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

export const SNewsCard = styled("article")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "4px",
  overflow: "hidden",
}));

export const SNewsCardContent = styled("figcaption")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "12px",
  backgroundColor: palette.uncategorized.white,
}));

export const SNewsModalContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
  textAlign: "center",
}));

export const SNewsCardContentTitles = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

export const SNewsCardClampText = styled(Typography)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
