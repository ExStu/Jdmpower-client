import { styled } from "@mui/material/styles";

import mq from "@themes/breakpoints";

export const SColumnsLayoutMainWrap = styled("div")(() =>
  mq({
    display: "flex",
    flexDirection: ["column", "row"],
    width: "100%",
    justifyContent: "space-between",
    gap: ["20px", "36px"],
  }),
);

export const SColumnsLayoutPrimaryWrap = styled("div")(() =>
  mq({
    display: "flex",
    flexDirection: "column",
    flex: "1 0 60%",
    width: ["100%", "100%", "calc(100% - 506px)"],
    maxWidth: [null, null, "900px"],
  }),
);

export const SColumnsLayoutSecondaryWrap = styled("div")(() =>
  mq({
    maxWidth: [null, null, "470px"],
    width: "470px",
    display: ["none", "none", "flex"],
    flexDirection: "column",
    flex: "1 0 470px",
  }),
);
