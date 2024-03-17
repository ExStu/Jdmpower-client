"use client";

import type { FC } from "react";

import type { BoxProps } from "@mui/material/Box";

import { SBox } from "./styled";

const Box: FC<BoxProps> = (props) => <SBox {...props} />;
export default Box;
