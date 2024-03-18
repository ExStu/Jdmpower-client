import { styled } from "@mui/material/styles";

export const SCarouselBtn = styled("button")(({ theme: { palette } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "4px",
  backgroundColor: "transparent",
  position: "absolute",
  top: "110%",
  zIndex: 2,
  transform: "translateY(-50%)",
  cursor: "pointer",
  outline: "none",
  border: `1px solid ${palette.secondary.main}`,
  borderRadius: "50%",
  transition: "background-color .15s ease-in, border-color .15s ease-in",

  "& svg": {
    transition: "color .15s ease-in",
    color: palette.secondary.main,
  },

  "&:hover": {
    backgroundColor: palette.primary.light,
    borderColor: palette.primary.light,
  },

  "&:hover svg": {
    color: palette.uncategorized.white,
  },

  "&:disabled": {
    opacity: "0.3",
  },

  "&[disabled]:hover": {
    backgroundColor: "transparent",
    borderColor: palette.secondary.main,
  },

  "&[disabled]:hover svg": {
    color: palette.secondary.main,
  },
}));
