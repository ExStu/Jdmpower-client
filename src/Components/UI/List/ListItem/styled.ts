import { ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SListItem = styled(ListItem)(({ theme: { typography } }) => ({
  fontSize: typography.body2.fontSize,
  lineHeight: typography.body2.lineHeight,
  fontWeight: typography.body2.fontWeight,
  minHeight: "50px",
}));
