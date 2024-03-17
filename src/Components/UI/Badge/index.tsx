import { FC } from "react";

import { BadgeProps } from "@mui/material";

import { SBadge } from "./styled";

const Badge: FC<BadgeProps> = (props) => <SBadge {...props} />;

export default Badge;
