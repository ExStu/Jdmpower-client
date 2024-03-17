import type { FC } from "react";
import React from "react";

import { Control, Controller, RegisterOptions } from "react-hook-form";

import FormHelperText from "../FormHelperText";
import InputLabel from "../InputLabel";

import { SCheckbox, SCheckboxIcon, SCheckedCheckboxIcon } from "./styled";

import type { ICheckbox } from "./types";

const Checkbox: FC<ICheckbox> = ({ error, size = "small", ...props }) => (
  <SCheckbox
    size={size}
    icon={<SCheckboxIcon error={error} size={size} />}
    checkedIcon={<SCheckedCheckboxIcon error={error} size={size} />}
    inputProps={{ "aria-label": "Чекбокс" }}
    {...props}
  />
);

export default Checkbox;

interface ICheckboxControlled {
  name: string;
  control: Control;
  label: string;
  labelId: string;
  rules: RegisterOptions;
  onChange: () => void;
  size: "small" | "medium";
}

const CheckboxControlled: FC<ICheckboxControlled> = ({
  name,
  control,
  label,
  labelId,
  rules = {},
  onChange: handleOnChange = () => {},
  size = "small",
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
        <InputLabel id={labelId} error={!!error}>
          {label}
        </InputLabel>
        <Checkbox
          onChange={(e) => {
            onChange(e);
            handleOnChange();
          }}
          error={!!error}
          value={value || ""}
          size={size}
          {...restProps}
        />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </>
    )}
  />
);

export { CheckboxControlled };
