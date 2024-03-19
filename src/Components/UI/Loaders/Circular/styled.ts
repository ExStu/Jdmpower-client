import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

import Box from "@Components/UI/Box";

export const SCircularLoader = styled(CircularProgress)(
  ({ theme: { palette } }) => ({}),
);

export const SContentLoaderBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
