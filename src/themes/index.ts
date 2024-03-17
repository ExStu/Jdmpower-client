"use client";

import React from "react";

import { createTheme, Theme } from "@mui/material/styles";

import colors from "./colors";
import components from "./components";
import typography from "./typography";

import { modal } from "@themes/extra-components";

declare module "@mui/material/styles" {
  interface Theme {
    modal: typeof modal;
  }
  interface ThemeOptions {
    modal?: typeof modal;
  }
  interface Palette {
    uncategorized: typeof colors.uncategorized;
  }

  interface PaletteOptions {
    uncategorized?: typeof colors.uncategorized;
  }

  interface PaletteColor {
    background?: string;
    border?: string;
    darkBorder?: string;
  }

  interface SimplePaletteColorOptions {
    background?: string;
    border?: string;
    darkBorder?: string;
  }
  interface TypographyVariants {
    body3: React.CSSProperties;
    bodyB1: React.CSSProperties;
    bodyB2: React.CSSProperties;
    bodyS1: React.CSSProperties;
    bodyS2: React.CSSProperties;
    bodyS3: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    bodyB1?: React.CSSProperties;
    bodyB2?: React.CSSProperties;
    bodyS1?: React.CSSProperties;
    bodyS2?: React.CSSProperties;
    bodyS3?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    bodyB1: true;
    bodyB2: true;
    bodyS1: true;
    bodyS2: true;
    bodyS3: true;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    caption: false;
    overline: false;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: "contained" | "outlined" | "text";
  }
}

const jdmPower: Theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1178,
      xl: 1400,
    },
  },
  palette: {
    ...colors,
  },
  typography: {
    ...typography,
  },
  components: {
    ...components,
  },
  modal,
});

export default jdmPower;
