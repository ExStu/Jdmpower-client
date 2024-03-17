import { FC } from "react";

import { DividerProps } from "@mui/material";

import { SDivider } from "@Components/UI/Divider/styled";

const Divider: FC<DividerProps> = (props) => <SDivider {...props} />;

export default Divider;
