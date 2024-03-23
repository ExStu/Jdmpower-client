import { FC } from "react";

import { PaginationProps } from "@mui/material";

import { SPagination } from "@Components/UI/Pagination/styled";

const Pagination: FC<PaginationProps> = (props) => <SPagination {...props} />;

export default Pagination;
