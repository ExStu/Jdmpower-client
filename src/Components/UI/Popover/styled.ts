import { Popover } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SPopover = styled(Popover)(() => ({
  "&.MuiPaper-root": {
    borderRadius: "0 0 4px 4px",
  },
}));
