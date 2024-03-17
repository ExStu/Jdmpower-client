import Modal, { modalClasses } from "@mui/material/Modal";
import { styled } from "@mui/material/styles";

import IconButton from "@Components/UI/Button/IconButton";

import mq from "@themes/breakpoints";

export const ModalCustom = styled(Modal)(({ theme: { palette } }) =>
  mq({
    [`&.${modalClasses.root}`]: {
      backgroundColor: palette.secondary.background,
      overflowY: "auto",
      display: "grid",
      gridTemplateRows: "0px 3fr 0px",
      justifyContent: "center",
    },
  }),
);

interface ISModalBox {
  maxWidth?: string;
}

export const SModalBox = styled("div", {
  shouldForwardProp: (prop) => prop !== "maxWidth",
})<ISModalBox>(({ theme: { modal }, maxWidth }) =>
  mq({
    alignSelf: "center",
    width: "100%",
    height: "fit-content",
    maxWidth: maxWidth || [modal.mobile.width, modal.desktop.width],
    padding: "0 16px",
    margin: "32px 0",
  }),
);

export const SModalContainer = styled("div")(({ theme: { modal } }) =>
  mq({
    position: "relative",
    borderRadius: [modal.mobile.borderRadius, modal.desktop.borderRadius],
    padding: [modal.mobile.padding, modal.desktop.padding],
    background: [modal.mobile.background, modal.desktop.background],
  }),
);

export const SModalCloseBtn = styled(IconButton)(() => ({
  position: "absolute",
  top: 20,
  right: 20,
}));
