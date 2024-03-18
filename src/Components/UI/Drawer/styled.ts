// @ts-nocheck

import styled from "@emotion/styled";

import { SwipeableDrawer } from "@mui/material";
import { drawerClasses } from "@mui/material/Drawer";

export const SDrawer = styled(SwipeableDrawer)(({ theme: { transitions } }) => ({
  [`& .${drawerClasses.paper}`]: {
    width: "350px",
    padding: "12px 24px",
  },
}));

export const SActionSheetChildrenWrap = styled("div")(() => ({
  paddingBottom: "16px",
}));

export const SActionSheetEdgeWrap = styled("div")(({ theme: { colors } }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: 0,
  backgroundColor: colors.uncategorized.white,
}));

export const SActionSheetEdge = styled("span")(({ theme: { colors } }) => ({
  width: "40px",
  height: "6px",
  backgroundColor: colors.grey[50],
  borderRadius: "25px",
  margin: "8px 0",
}));
