import { TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import Typography from "@Components/UI/Typography";

interface ISPriceWithDiscount {
  direction: "row" | "column";
}

export const SPriceWithDiscount = styled("div")<ISPriceWithDiscount>(
  ({ direction }) => ({
    display: "flex",
    flexDirection: direction,
    gap: direction === "column" ? "4px" : "8px",
  }),
);

interface ISPriceInitialPrice extends TypographyProps {
  hasDiscount: boolean;
  direction: "row" | "column";
}

export const SPriceInitialPrice = styled(Typography, {
  shouldForwardProp: (propName) => propName !== "hasDiscount",
})<ISPriceInitialPrice>(({ theme: { palette }, hasDiscount, direction }) => ({
  display: "flex",
  alignSelf: direction === "row" ? "flex-end" : "flex-start",
  position: "relative",
  color: hasDiscount ? palette.grey[500] : palette.secondary.main,
}));

export const SPriceCrossed = styled("span")(({ theme: { palette } }) => ({
  position: "absolute",
  backgroundColor: palette.primary.light,
  left: "-1px",
  right: "-1px",
  top: "50%",
  height: "2px",
  borderRadius: "2px",
  opacity: ".8",
  transform: "rotate(-5deg) translateY(-50%)",
}));
