// @ts-nocheck
import type { FC } from "react";
import React from "react";

import { MaskitoOptions } from "@maskito/core";
import { useMaskito } from "@maskito/react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { mergeRefs } from "react-merge-refs";

import ClearIcon from "@mui/icons-material/Clear";
import { AutocompleteProps } from "@mui/material";

import TextField from "../TextField";

import { SAutocomplete } from "./styled";

const Autocomplete: FC<AutocompleteProps> = (props) => <SAutocomplete {...props} />;

interface IAutocompleteControlled {
  name: string;
  control: Control<FieldValues, any, FieldValues>;
  mask?: MaskitoOptions;
  options?: any;
  label?: string;
  rules?: any;
  open?: any;
  onSelect?: any;
  onChange?: any;
  placeholder?: string;
  fullWidth: boolean;
}

const AutocompleteControlled = React.forwardRef(
  (
    {
      name,
      control,
      mask,
      options,
      label,
      rules = {},
      open,
      onSelect = () => {},
      onChange: handleOnChange = () => {},
      placeholder,
      fullWidth,
      ...restProps
    }: IAutocompleteControlled,
    ref,
  ) => {
    const maskHook = useMaskito({ options: mask });
    const localRef = mask ? maskHook : ref;

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({
          field: { onChange, onBlur, value, ref, ...rest },
          fieldState: { error },
          formState,
        }) => (
          <Autocomplete
            disablePortal
            freeSolo
            id={name}
            options={options}
            onBlur={onBlur}
            autoСomplete="off"
            disableClearable={!value}
            clearIcon={<ClearIcon />}
            value={value || ""}
            fullWidth={fullWidth}
            {...rest}
            onChange={(e, v, r, d) => {
              onSelect(e, v, r, d);
            }}
            onInputChange={(event, newValue) => {
              onChange(newValue);
              handleOnChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                  onInput: (e) => {
                    params.inputProps.onChange(e);
                  },
                  ref: mergeRefs([params.inputProps.ref, localRef]),
                }}
                multiline
                maxRows={10}
                fullWidth
                label={label}
                placeholder={placeholder}
                // variant="filled"
                helperText={error ? error.message : null}
                error={!!error}
              />
            )}
            {...restProps}
          />
        )}
      />
    );
  },
);

export { AutocompleteControlled };

AutocompleteControlled.displayName = "AutocompleteControlled";
export default Autocomplete;
