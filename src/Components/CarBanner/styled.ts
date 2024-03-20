import { styled } from "@mui/material/styles";

import Button from "@Components/UI/Button";

import bg from "../../../public/images/car-selection-bg.webp";

export const SCarBannerWrap = styled("div")(({ theme: { palette } }) => ({
  position: "relative",
  display: "flex",
  paddingLeft: "20px",
  borderRadius: "12px",
  overflow: "hidden",
  background:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.3) 0%), url('/images/car-selection-bg.webp')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
}));

export const SCarBannerClear = styled(Button)(() => ({
  position: "absolute",
  top: "20px",
  right: "20px",
}));

export const SCarBannerContentWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "20px 40px",
  gap: "12px",
  width: "100%",
  height: "100%",

  "& p, h3": {
    color: palette.common.white,
  },
}));
export const SCarBannerDescWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-end",
  gap: "8px",
}));
