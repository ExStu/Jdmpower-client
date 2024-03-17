import { styled } from "@mui/material/styles";

export const SProductQuantityActionWrap = styled("div")(
  ({ theme: { palette } }) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: `1px solid ${palette.uncategorized.border}`,
    borderRadius: "4px",
  }),
);
