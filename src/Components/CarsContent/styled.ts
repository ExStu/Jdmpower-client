import { styled } from "@mui/material/styles";

export const SCarsContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minHeight: "286.3px",
  width: "300px",
  padding: "20px",
}));

export const SCarsContentTop = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  gap: "20px",
}));

export const SCarsContentBottom = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: "10px 0",
}));
