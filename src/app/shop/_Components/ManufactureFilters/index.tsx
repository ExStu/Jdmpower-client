import { FC } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { ManufactureResponseDto } from "@redux/rtk/ManufacturesApi/types";
import { GetAllProductsQueryEnum } from "@redux/rtk/ProductsApi/types";

import Checkbox from "@Components/UI/Checkbox";
import { FormControl } from "@Components/UI/FormControl";
import { FormControlLabel } from "@Components/UI/FormControlLabel";
import Typography from "@Components/UI/Typography";

import { SFiltersWrap } from "../styled";

import { useFilters } from "@Hooks/useFilters";

interface IManufactureFilters {
  manufactures: ManufactureResponseDto[];
}

const ManufactureFilters: FC<IManufactureFilters> = ({ manufactures }) => {
  const { control } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString, updateQueryParams } = useFilters();
  const manufactureId = searchParams.get(GetAllProductsQueryEnum.MANUFACTURE_ID);

  const handleCheckbox = (id: number) => {
    if (searchParams.get(GetAllProductsQueryEnum.MANUFACTURE_ID) !== id.toString()) {
      router.push(
        pathname +
          "?" +
          createQueryString(GetAllProductsQueryEnum.MANUFACTURE_ID, id.toString()),
      );
    } else {
      updateQueryParams(GetAllProductsQueryEnum.MANUFACTURE_ID, "");
    }
  };

  return (
    <SFiltersWrap>
      {manufactures.map((item) => (
        <FormControl fullWidth key={item.id}>
          <FormControlLabel
            control={
              <Controller
                name={item.slug}
                defaultValue={false}
                render={({ field: { value, onChange } }) => (
                  <Checkbox
                    size="small"
                    onChange={(e) => {
                      onChange(e);
                      handleCheckbox(item.id);
                    }}
                    checked={manufactureId === item.id.toString()}
                  />
                )}
                control={control}
              />
            }
            label={<Typography>{item.name}</Typography>}
          />
        </FormControl>
      ))}
    </SFiltersWrap>
  );
};

export default ManufactureFilters;
