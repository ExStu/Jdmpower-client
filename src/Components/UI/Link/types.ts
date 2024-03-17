import type { LinkProps } from "@mui/material/Link";

export interface SLinkProps extends LinkProps {
  variant?: "body1" | "bodyS1";
  customColor?: string;
  disabled?: boolean;
}
