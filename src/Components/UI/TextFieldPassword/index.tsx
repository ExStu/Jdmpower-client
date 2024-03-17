import type { FC } from "react";
import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import type { TextFieldProps } from "@mui/material/TextField";

import { STextField } from "./styled";

const TextFieldPassword: FC<TextFieldProps> = ({ size, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <STextField
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              size="small"
              disableRipple
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
              title={showPassword ? "Скрыть пароль" : "Показать пароль"}
              onClick={handleClickShowPassword}
              tabIndex={-1}
            >
              {showPassword ? (
                <VisibilityIcon width={20} height={20} />
              ) : (
                <VisibilityOffIcon width={20} height={20} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      size={size}
      {...props}
    />
  );
};
export default TextFieldPassword;
