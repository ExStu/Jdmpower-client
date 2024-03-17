import MuiAutocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import { filledInputClasses } from "@mui/material/FilledInput";
import { styled } from "@mui/material/styles";

export const SAutocomplete = styled(MuiAutocomplete)(({ theme: { palette } }) => ({
  [`& .${autocompleteClasses.input}`]: {
    padding: 0,
  },
  [`&.${autocompleteClasses.root}`]: {
    [`& .${filledInputClasses.root}`]: {
      padding: 0,
    },
  },
  "& .MuiFilledInput-root.MuiInputBase-sizeSmall .MuiFilledInput-input": {
    padding: "21px 47px 5px 15px",
  },
}));
