import { FC, PropsWithChildren } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import { useCarouselNav } from "@utils/useCarouselNav";

import { CarouselBtn } from "./CarouselBtn";
import { SCarousel } from "./styled";

interface ICarousel extends PropsWithChildren<unknown> {
  slidesPerView: number | "auto" | undefined;
  space: number;
  zoom?: boolean;
  centeredSlides?: boolean;
  className: string;
  modalCustom?: boolean;
}

const Carousel: FC<ICarousel> = ({
  slidesPerView,
  space,
  zoom = false,
  centeredSlides = false,
  className,
  modalCustom,
  children,
}) => {
  const [nextEl, nextElRef] = useCarouselNav<HTMLButtonElement>();
  const [prevEl, prevElRef] = useCarouselNav<HTMLButtonElement>();

  return (
    <SCarousel>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={space}
        navigation={{
          prevEl,
          nextEl,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        speed={500}
        centeredSlides={centeredSlides}
        zoom={zoom}
        modules={[Autoplay, Navigation, Pagination]}
        style={{ position: "static" }}
        className={className}
      >
        {children}
      </Swiper>
      <CarouselBtn ref={prevElRef} variant="prev" modalCustom={modalCustom} />
      <CarouselBtn ref={nextElRef} variant="next" modalCustom={modalCustom} />
    </SCarousel>
  );
};

export default Carousel;
