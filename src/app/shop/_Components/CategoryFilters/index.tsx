import { FC, useCallback } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

import { CategoryResponseDto } from "@redux/rtk/CategoriesApi/types";
import {
  GetAllProductQueryDto,
  GetAllProductsQueryEnum,
} from "@redux/rtk/ProductsApi/types";

import Checkbox from "@Components/UI/Checkbox";
import { FormControl } from "@Components/UI/FormControl";
import { FormControlLabel } from "@Components/UI/FormControlLabel";
import Typography from "@Components/UI/Typography";

import { SFiltersWrap } from "../styled";

import { useFilters } from "@Hooks/useFilters";

interface ICategoryFilters {
  categories: CategoryResponseDto[];
}

const CategoryFilters: FC<ICategoryFilters> = ({ categories }) => {
  const { control } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString, updateQueryParams } = useFilters();
  const categoryId = searchParams.get(GetAllProductsQueryEnum.CATEGORY_ID);

  const handleCheckbox = (id: number) => {
    if (searchParams.get(GetAllProductsQueryEnum.CATEGORY_ID) !== id.toString()) {
      router.push(
        pathname +
          "?" +
          createQueryString(GetAllProductsQueryEnum.CATEGORY_ID, id.toString()),
      );
    } else {
      updateQueryParams(GetAllProductsQueryEnum.CATEGORY_ID, "");
    }
  };

  return (
    <SFiltersWrap>
      {categories.map((item) => (
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
                    checked={categoryId === item.id.toString()}
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

export default CategoryFilters;
