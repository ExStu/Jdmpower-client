import { FC } from "react";

import { ChipProps } from "@mui/material";

import { SChip } from "./styled";

const Chip: FC<ChipProps> = (props) => <SChip {...props} />;

export default Chip;
