"use client";

import { FC } from "react";

import { ContainerProps } from "@mui/material";

import { SContainer } from "./styled";

const Container: FC<ContainerProps> = (props) => <SContainer {...props} />;

export default Container;
