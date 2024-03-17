import type { FC } from "react";

import type { SliderProps } from "@mui/material/Slider";

import { SSlider } from "./styled";

const Slider: FC<SliderProps> = (props) => <SSlider {...props} />;
export default Slider;
