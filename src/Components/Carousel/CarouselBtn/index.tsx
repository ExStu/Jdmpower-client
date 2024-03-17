import { forwardRef } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useMediaQuery, useTheme } from "@mui/material";

import { SCarouselBtn } from "./styled";
import { ICarouselBtn } from "./types";

export const CarouselBtn = forwardRef<HTMLButtonElement, ICarouselBtn>(
  ({ variant, modalCustom, ...props }, ref) => {
    const { breakpoints } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up("md"));
    const isMobile = useMediaQuery(breakpoints.down("sm"));

    return (
      <SCarouselBtn
        className="carousel-btn"
        disabled={props.disabled}
        ref={ref}
        {...props}
        sx={
          variant === "next"
            ? {
                right: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "43%" : "34%",
              }
            : { left: modalCustom ? "27%" : isMobile ? 0 : isTablet ? "43%" : "34%" }
        }
      >
        {variant === "next" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </SCarouselBtn>
    );
  },
);

CarouselBtn.displayName = "CarouselBtn";
