import type { FC } from "react";

import type { SwipeableDrawerProps } from "@mui/material";

import {
  SDrawer,
  SActionSheetChildrenWrap,
  SActionSheetEdge,
  SActionSheetEdgeWrap,
} from "./styled";

const Drawer: FC<SwipeableDrawerProps> = ({ ...props }) => {
  const iOS =
    typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <SDrawer
      {...props}
      SlideProps={{
        easing: "cubic-bezier(0.47, 0, 0.54, 1)",
      }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      transitionDuration={220}
      anchor="right"
    >
      {props.children}
    </SDrawer>
  );
};
export default Drawer;
