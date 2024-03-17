import { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const rubik: NextFont = localFont({
  src: [
    {
      path: "../../public/fonts/RubikRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/RubikMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/RubikSemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/RubikBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});

const typography = {
  fontFamily: rubik.style.fontFamily,
  h1: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "60px",
    lineHeight: "117%",
  },
  h2: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    lineHeight: "117%",
  },
  h3: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "117%",
  },
  h4: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "117%",
  },
  h5: undefined,
  h6: undefined,
  body1: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "117%",
  },
  body2: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "117%",
  },
  body3: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "117%",
  },
  bodyB1: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "117%",
    fontFamily: rubik.style.fontFamily,
  },
  bodyB2: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "117%",
    fontFamily: rubik.style.fontFamily,
  },
  bodyS1: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "117%",
    fontFamily: rubik.style.fontFamily,
  },
  bodyS2: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "117%",
    fontFamily: rubik.style.fontFamily,
  },
  bodyS3: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "117%",
    fontFamily: rubik.style.fontFamily,
  },
  button: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "117%",
  },
};

export default typography;
