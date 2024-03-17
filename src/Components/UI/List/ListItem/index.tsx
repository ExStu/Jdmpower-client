import { FC } from "react";

import { ListItemProps } from "@mui/material";

import { SListItem } from "@Components/UI/List/ListItem/styled";

const ListItem: FC<ListItemProps> = (props) => (
  <SListItem disablePadding divider {...props} />
);

export default ListItem;
