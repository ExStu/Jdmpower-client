import type { FC } from "react";

import type { FormControlProps } from "@mui/material/FormControl";
import MUIFormControl from "@mui/material/FormControl";

const FormControl: FC<FormControlProps> = (props) => <MUIFormControl {...props} />;
export { FormControl };
