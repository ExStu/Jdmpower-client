import { ButtonHTMLAttributes } from "react";

export interface ICarouselBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "next" | "prev";
  modalCustom?: boolean;
}
