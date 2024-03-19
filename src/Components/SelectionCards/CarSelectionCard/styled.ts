import { styled } from "@mui/material/styles";

export const SCarSelectionCard = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "24px",
  border: `1px solid ${palette.uncategorized.border}`,

  "& img": {
    transition: "filter .15s ease-in",
  },

  "&:hover img": {
    filter: "brightness(0.5)",
  },
}));
