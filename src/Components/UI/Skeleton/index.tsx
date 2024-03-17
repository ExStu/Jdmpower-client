import { FC } from "react";

import { SkeletonProps } from "@mui/material";

import { SSkeleton } from "./styled";

const Skeleton: FC<SkeletonProps> = (props) => <SSkeleton {...props} />;

export default Skeleton;
