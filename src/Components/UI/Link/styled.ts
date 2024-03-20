import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

import type { SLinkProps } from "@Components/UI/Link/types";

import mq from "@themes/breakpoints";

export const SLink = styled(Link, {
  shouldForwardProp: (props: string) =>
    !["customColor, variant, disabled"].includes(props),
})<SLinkProps>(
  ({ theme: { palette, typography }, customColor, variant = "body1", disabled }) =>
    mq({
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: customColor || palette.uncategorized.white,
      fontSize:
        variant === "bodyS1"
          ? typography.bodyS1.fontSize
          : typography.body1.fontSize,
      fontWeight:
        variant === "bodyS1"
          ? typography.bodyS1.fontWeight
          : typography.body1.fontWeight,
      lineHeight:
        variant === "bodyS1"
          ? typography.bodyS1.lineHeight
          : typography.body1.lineHeight,
      transition: "color .15s ease-in",
      textTransform: "uppercase",

      "& svg": {
        width: "24px",
        height: "24px",
        transition: "color .15s ease-in",
      },

      "&:hover": {
        color: palette.primary.light,
      },

      "&:hover svg": {
        color: palette.primary.light,
      },
      "&:active": {
        color: palette.primary.dark,
      },
      ...(disabled && {
        color: palette.text.disabled,
        cursor: "default",
        pointerEvents: "none",
      }),
    }),
);
