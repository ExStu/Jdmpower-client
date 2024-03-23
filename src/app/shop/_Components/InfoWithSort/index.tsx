import { FC, useEffect } from "react";

import { log } from "next/dist/server/typescript/utils";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import {
  GetAllProductsQueryEnum,
  ProductSortEnum,
} from "@redux/rtk/ProductsApi/types";

import { MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import Box from "@Components/UI/Box";
import Button from "@Components/UI/Button";
import { SelectControlled } from "@Components/UI/Select";
import Typography from "@Components/UI/Typography";

import { SInfoWithSort } from "./styled";

import { useFilters } from "@Hooks/useFilters";
import { SHeaderFormSelect } from "@Layout/Header/styled";
import { sortMap } from "@constants/hashMaps";

interface IInfoWithSort {
  totalLength: number;
}
const InfoWithSort: FC<IInfoWithSort> = ({ totalLength }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get(GetAllProductsQueryEnum.SORT_BY);
  const { control, setValue } = useForm();
  const { createQueryString, updateQueryParams } = useFilters();

  const handleSortChange = (e: SelectChangeEvent<unknown>) => {
    console.log(e.target.value);
    router.push(
      `${pathname}?${createQueryString(GetAllProductsQueryEnum.SORT_BY, e.target.value as string)}`,
    );
  };

  const handleClearFilters = () => {
    router.replace(pathname, undefined);
  };

  useEffect(() => {
    if (sortBy) {
      setValue("selectSort", sortBy);
      updateQueryParams(GetAllProductsQueryEnum.SORT_BY, sortBy);
    } else {
      setValue("selectSort", ProductSortEnum.NEWEST);
    }
  }, [sortBy, setValue, updateQueryParams]);

  return (
    <SInfoWithSort>
      <Typography>{`Всего товаров: ${totalLength.toString()}`}</Typography>
      <SHeaderFormSelect variant="outlined">
        <SelectControlled
          name="selectSort"
          control={control}
          onChange={(e) => handleSortChange(e)}
        >
          {Object.values(ProductSortEnum).map((item) => (
            <MenuItem key={item} value={item}>
              <Typography>{sortMap[item]}</Typography>
            </MenuItem>
          ))}
        </SelectControlled>
      </SHeaderFormSelect>
      <Button variant="outlined" onClick={handleClearFilters}>
        Сбросить фильтры
      </Button>
    </SInfoWithSort>
  );
};

export default InfoWithSort;
