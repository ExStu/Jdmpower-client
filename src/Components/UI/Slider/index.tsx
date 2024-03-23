import type { FC, HTMLAttributes } from "react";

import { SliderProps, SliderThumb } from "@mui/material/Slider";

import { SSlider } from "./styled";

const Slider: FC<SliderProps> = (props) => <SSlider {...props} />;

export const SliderThumbComponent = (props: HTMLAttributes<unknown>) => {
  const { children, ...rest } = props;
  return (
    <SliderThumb {...rest}>
      {children}
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </SliderThumb>
  );
};
export default Slider;
