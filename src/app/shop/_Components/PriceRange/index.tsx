import { FC, useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { GetAllProductsQueryEnum } from "@redux/rtk/ProductsApi/types";
import { getActiveCurrency } from "@redux/selectors";

import Slider, { SliderThumbComponent } from "@Components/UI/Slider";
import Typography from "@Components/UI/Typography";

import { addCurrencyToPrice, getPriceNumber } from "@utils/formatters/price";

import { SPriceRange, SPriceRangeMarks, SPriceRangeSliderWrap } from "./styled";

import { useFilters } from "@Hooks/useFilters";
import { useAppSelector } from "@Hooks/useRedux";

interface IPriceRange {
  minPrice: number;
  maxPrice: number;
}

const PriceRange: FC<IPriceRange> = ({ minPrice, maxPrice }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString, updateQueryParams } = useFilters();
  const activeCurrency = useAppSelector(getActiveCurrency);
  const [value, setValue] = useState<number[]>([0, 0]);

  useEffect(() => {
    if (activeCurrency) {
      if (
        searchParams.has(GetAllProductsQueryEnum.MAX_PRICE) &&
        searchParams.has(GetAllProductsQueryEnum.MIN_PRICE)
      ) {
        setValue([
          getPriceNumber(
            Number(searchParams.get(GetAllProductsQueryEnum.MIN_PRICE)),
            activeCurrency.value,
          ),
          getPriceNumber(
            Number(searchParams.get(GetAllProductsQueryEnum.MAX_PRICE)),
            activeCurrency.value,
          ),
        ]);
      } else {
        setValue([
          getPriceNumber(minPrice, activeCurrency.value),
          getPriceNumber(maxPrice, activeCurrency.value),
        ]);
      }
    }
  }, [activeCurrency, searchParams, maxPrice, minPrice]);

  const createSearchParamsDebounced = useDebouncedCallback((values: number[]) => {
    router.push(
      pathname +
        "?" +
        createQueryString(GetAllProductsQueryEnum.MIN_PRICE, values[0].toString()) +
        "&" +
        createQueryString(GetAllProductsQueryEnum.MAX_PRICE, values[1].toString()),
      { scroll: false },
    );
    setValue(values);
  }, 500);

  const updateSearchParamsDebounced = useDebouncedCallback(
    (key: GetAllProductsQueryEnum, newValue: number) => {
      updateQueryParams(key, newValue.toString());
    },
    500,
  );

  const handleChange = (event: Event, newValues: number | number[]) => {
    if (
      searchParams.has(GetAllProductsQueryEnum.MIN_PRICE) &&
      searchParams.has(GetAllProductsQueryEnum.MAX_PRICE) &&
      Array.isArray(newValues)
    ) {
      if (newValues[0] !== value[0]) {
        updateSearchParamsDebounced(GetAllProductsQueryEnum.MIN_PRICE, newValues[0]);
      } else if (newValues[1] !== value[1]) {
        updateSearchParamsDebounced(GetAllProductsQueryEnum.MAX_PRICE, newValues[1]);
      }
      setValue(newValues);
    } else if (Array.isArray(newValues)) {
      createSearchParamsDebounced(newValues);
    }
  };

  return (
    activeCurrency && (
      <SPriceRange>
        <SPriceRangeSliderWrap>
          <Slider
            slots={{ thumb: SliderThumbComponent }}
            step={10}
            value={value}
            min={getPriceNumber(minPrice, activeCurrency.value)}
            max={getPriceNumber(maxPrice, activeCurrency.value)}
            onChange={handleChange}
          />
        </SPriceRangeSliderWrap>
        <SPriceRangeMarks>
          <Typography>{addCurrencyToPrice(value[0], activeCurrency)}</Typography>
          <Typography>{addCurrencyToPrice(value[1], activeCurrency)}</Typography>
        </SPriceRangeMarks>
      </SPriceRange>
    )
  );
};

export default PriceRange;
