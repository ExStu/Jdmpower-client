import { useCallback, useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { GetAllProductQueryDto } from "@redux/rtk/ProductsApi/types";

export const useFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { updateQueryParam } = useActions()

  // const { queryParams, isFilterUpdated } = useAppSelector(
  //   state => state.filters
  // )

  // useEffect(() => {
  //   searchParams.forEach((value, key) => {
  //     updateQueryParam({
  //       key,
  //       value
  //     })
  //   })
  // }, [])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const updateQueryParams = (key: keyof GetAllProductQueryDto, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      console.log("updateValue: ", value);
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }

    router.replace(pathname + `?${newParams.toString().replace(/%7C/g, "|")}`);
    // updateQueryParam({ key, value })
  };

  return {
    updateQueryParams,
    createQueryString,
    // queryParams,
    // isFilterUpdated
  };
};
