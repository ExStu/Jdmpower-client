import { styled } from "@mui/material/styles";

import Button from "@Components/UI/Button";
import { FormControl } from "@Components/UI/FormControl";

export const SHeader = styled("header")(({ theme: { palette } }) => ({
  backgroundColor: palette.secondary.main,
}));

export const SHeaderBorderSection = styled("div")(({ theme: { palette } }) => ({
  borderBottom: `1px solid ${palette.uncategorized.darkBorder}`,
}));

export const SHeaderBottom = styled("div")(({ theme: { palette } }) => ({
  borderBottom: `2px solid ${palette.primary.main}`,
}));

export const SHeaderTopWrap = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // padding: "4px 0",
}));

export const SHeaderFormSelect = styled(FormControl)(({ theme: { palette } }) => ({
  width: "200px",
}));

export const SHeaderTopPhonesWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export const SHeaderTopLinksWrap = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

export const SHeaderMiddleWrap = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0",
}));

export const SHeaderMiddleSearchWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  width: "50%",
}));

export const SHeaderMiddleSearchBtn = styled(Button)(() => ({
  borderRadius: "0 4px 4px 0",
  padding: "12px 24px",
  textTransform: "none",
}));

export const SHeaderMiddleActions = styled("div")(() => ({
  display: "flex",
  gap: "20px",
}));

export const SHeaderBottomWrap = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));

export const SHeaderBottomCarsBtn = styled(Button)(({ theme: { palette } }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minHeight: "50px",
  padding: "12px 20px",
  borderRadius: "4px 4px 0 0",
}));

export const SHeaderBottomSocials = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginLeft: "auto",
}));
