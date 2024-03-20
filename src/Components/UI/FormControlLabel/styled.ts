import { FormControlLabel, formControlLabelClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SFormControlLabel = styled(FormControlLabel)(
  ({ theme: { palette } }) => ({
    [`&.${formControlLabelClasses.root}`]: {
      marginLeft: 0,
      marginRight: 0,
      gap: "8px",
      alignItems: "center",
      color: palette.secondary.main,
    },
  }),
);
