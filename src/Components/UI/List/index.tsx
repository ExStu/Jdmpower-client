import type { FC } from "react";

import type { ListProps } from "@mui/material/List";

import { SList } from "./styled";

const List: FC<ListProps> = (props) => <SList disablePadding {...props} />;

export default List;
