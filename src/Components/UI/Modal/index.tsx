import type { FC, PropsWithChildren } from "react";

import CloseIcon from "@mui/icons-material/Close";
import type { ModalProps } from "@mui/material/Modal";

import { ModalCustom, SModalBox, SModalCloseBtn, SModalContainer } from "./styled";

interface IModalBox extends PropsWithChildren<unknown> {
  onClose: () => void;
  maxWidth?: string;
}

const Modal: FC<ModalProps> = (props) => (
  <ModalCustom {...props}>
    <>{props.children}</>
  </ModalCustom>
);

export const ModalBox: FC<IModalBox> = ({ children, onClose, maxWidth }) => {
  return (
    <SModalBox maxWidth={maxWidth}>
      <SModalContainer>
        <SModalCloseBtn variant="text" onClick={onClose}>
          <CloseIcon />
        </SModalCloseBtn>
        {children}
      </SModalContainer>
    </SModalBox>
  );
};
export default Modal;
