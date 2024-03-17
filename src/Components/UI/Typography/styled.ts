"use client";

import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ISTypography {
  color?: string;
}

export const STypography = styled(Typography)<ISTypography>(
  ({ theme: { typography, palette }, variant, color }) => ({
    color: color || palette.secondary.main,
    ...(variant === "h1"
      ? {
          ...typography.h1,
        }
      : {}),
    ...(variant === "h2"
      ? {
          ...typography.h2,
        }
      : {}),
    ...(variant === "h3"
      ? {
          ...typography.h3,
        }
      : {}),
    ...(variant === "h4"
      ? {
          ...typography.h4,
        }
      : {}),
    ...(variant === "body1"
      ? {
          ...typography.body1,
        }
      : {}),
    ...(variant === "body2"
      ? {
          ...typography.body2,
        }
      : {}),
    ...(variant === "body3"
      ? {
          ...typography.body3,
        }
      : {}),
    ...(variant === "bodyB1"
      ? {
          ...typography.bodyB1,
        }
      : {}),
    ...(variant === "bodyB2"
      ? {
          ...typography.bodyB2,
        }
      : {}),
    ...(variant === "bodyS1"
      ? {
          ...typography.bodyS1,
        }
      : {}),
    ...(variant === "bodyS2"
      ? {
          ...typography.bodyS2,
        }
      : {}),
    ...(variant === "bodyS3"
      ? {
          ...typography.bodyS3,
        }
      : {}),
  }),
) as typeof Typography;
