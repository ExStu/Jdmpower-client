import type { FC, PropsWithChildren } from "react";
import React from "react";

import { Control, Controller, RegisterOptions } from "react-hook-form";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { SelectChangeEvent, SelectProps } from "@mui/material/Select";

import FormHelperText from "../FormHelperText";
import InputLabel from "../InputLabel";

import { SSelect } from "./styled";

const Select: FC<SelectProps> = (props) => (
  <SSelect {...props} IconComponent={KeyboardArrowDownIcon} />
);
export default Select;
export type { SelectChangeEvent };

interface ISelectControlled extends PropsWithChildren<unknown> {
  name: string;
  control: Control;
  mask?: any;
  label?: string;
  labelId?: string;
  rules?: RegisterOptions;
  onChange: (e: SelectChangeEvent<unknown>) => void;
}

const SelectControlled: FC<ISelectControlled> = ({
  name,
  control,
  mask,
  label,
  rules = {},
  labelId,
  onChange: handleOnChange = (e) => {},
  ...restProps
}) => (
  <Controller
    name={name}
    rules={rules}
    control={control}
    render={({
      field: { onChange, value, ...rest },
      fieldState: { error },
      formState,
    }) => (
      <>
        {label && (
          <InputLabel id={labelId} error={!!error}>
            {label}
          </InputLabel>
        )}
        <Select
          onChange={(e) => {
            onChange(e);
            handleOnChange(e);
          }}
          error={!!error}
          labelId={labelId}
          value={value || ""}
          {...restProps}
        />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </>
    )}
  />
);

export { SelectControlled };
