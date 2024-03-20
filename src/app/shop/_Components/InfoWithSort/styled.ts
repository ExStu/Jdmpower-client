import { styled } from "@mui/material/styles";

export const SInfoWithSort = styled("div")(({ theme: { palette } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px",
  border: `1px solid ${palette.uncategorized.border}`,
  borderRadius: "8px",
}));
