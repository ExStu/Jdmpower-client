"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useGetCategoriesQuery } from "@redux/rtk/CategoriesApi";
import { useLazyGetGenerationByIdQuery } from "@redux/rtk/GenerationsApi";
import { useGetManufacturesQuery } from "@redux/rtk/ManufacturesApi";
import {
  useLazyGetAllProductsQuery,
  useLazyGetProductsBySearchQuery,
} from "@redux/rtk/ProductsApi";
import {
  GetAllProductsQueryEnum,
  ProductSortEnum,
} from "@redux/rtk/ProductsApi/types";
import { getActiveCarSelected } from "@redux/selectors";

import { useTheme } from "@mui/material";

import CarBanner from "@Components/CarBanner";
import ProductCard from "@Components/ProductCard";
import SectionTitle from "@Components/SectionTitle";
import Container from "@Components/UI/Container";
import Divider from "@Components/UI/Divider";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Skeleton from "@Components/UI/Loaders/Skeleton";
import Pagination from "@Components/UI/Pagination";
import Typography from "@Components/UI/Typography";

import { skeletonArray } from "@utils/skeletonCount";

import CategoryFilters from "./_Components/CategoryFilters";
import ManufactureFilters from "./_Components/ManufactureFilters";
import {
  SColumnsLayoutMainWrap,
  SColumnsLayoutPrimaryWrap,
  SColumnsLayoutSecondaryWrap,
  SFiltersTitle,
  SPrimaryLayoutWrap,
  SProductsSkeletonWrap,
  SProductsWrap,
  SSecondaryLayoutWrap,
  SShopPaginationWrap,
} from "./styled";

import { useFilters } from "@Hooks/useFilters";
import { useAppSelector } from "@Hooks/useRedux";
import InfoWithSort from "@app/shop/_Components/InfoWithSort";
import PriceRange from "@app/shop/_Components/PriceRange";

const Shop = () => {
  const { palette } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const productsSkeletonCount = skeletonArray(6);
  const activeCar = useAppSelector(getActiveCarSelected);
  const { createQueryString, updateQueryParams } = useFilters();

  const [page, setPage] = useState<number>(1);

  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: manufacturesData, isLoading: manufacturesLoading } =
    useGetManufacturesQuery();
  const [
    getAllProducts,
    { data: productsData, isLoading: productsLoading, isFetching: productsFetching },
  ] = useLazyGetAllProductsQuery();

  const handlePaginationChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    router.push(
      pathname +
        "?" +
        createQueryString(GetAllProductsQueryEnum.PAGE_NUMBER, value.toString()),
    );
  };

  useEffect(() => {
    if (activeCar) {
      router.push(
        pathname +
          "?" +
          createQueryString(
            GetAllProductsQueryEnum.GENERATION_ID,
            activeCar.id.toString(),
          ),
      );
    }
  }, [activeCar, pathname, createQueryString, router]);

  console.log("paramsMin: ", searchParams.get(GetAllProductsQueryEnum.MIN_PRICE));
  console.log("paramsMax: ", searchParams.get(GetAllProductsQueryEnum.MAX_PRICE));

  useEffect(() => {
    if (searchParams.has(GetAllProductsQueryEnum.PAGE_NUMBER)) {
      setPage(Number(searchParams.get(GetAllProductsQueryEnum.PAGE_NUMBER)));
    } else {
      createQueryString(GetAllProductsQueryEnum.PAGE_NUMBER, "1");
    }
    getAllProducts({
      sortBy:
        (searchParams.get(GetAllProductsQueryEnum.SORT_BY) as ProductSortEnum) ??
        undefined,
      searchTerm: searchParams.get(GetAllProductsQueryEnum.SEARCH_TERM) ?? undefined,
      minPrice: searchParams.get(GetAllProductsQueryEnum.MIN_PRICE) ?? undefined,
      maxPrice: searchParams.get(GetAllProductsQueryEnum.MAX_PRICE) ?? undefined,
      categoryId: searchParams.get(GetAllProductsQueryEnum.CATEGORY_ID) ?? undefined,
      manufactureId:
        searchParams.get(GetAllProductsQueryEnum.MANUFACTURE_ID) ?? undefined,
      generationId:
        searchParams.get(GetAllProductsQueryEnum.GENERATION_ID) ?? undefined,
      pageNumber: searchParams.get(GetAllProductsQueryEnum.PAGE_NUMBER) ?? "1",
    });
  }, [getAllProducts, searchParams, page, createQueryString]);

  useEffect(() => {
    if (productsData) {
      if (
        searchParams.get(GetAllProductsQueryEnum.PAGE_NUMBER) &&
        productsData.totalLength > 0 &&
        productsData.products.length === 0
      ) {
        updateQueryParams(GetAllProductsQueryEnum.PAGE_NUMBER, "1");
      }
    }
  }, [productsData, pathname, updateQueryParams, searchParams]);

  return (
    <Container>
      <SectionTitle title="Каталог" />
      <SColumnsLayoutMainWrap>
        <SColumnsLayoutSecondaryWrap>
          {categoriesLoading ||
          !categoriesData ||
          manufacturesLoading ||
          !manufacturesData ? (
            <Skeleton variant="rounded" width={380} height={560} animation="pulse" />
          ) : (
            <SSecondaryLayoutWrap>
              <SFiltersTitle>
                <Typography variant="h4">Категории</Typography>
                <Divider />
              </SFiltersTitle>
              <CategoryFilters categories={categoriesData} />
              <SFiltersTitle>
                <Typography variant="h4">Цена</Typography>
                <Divider />
              </SFiltersTitle>
              {productsLoading || !productsData ? (
                <Skeleton
                  variant="rounded"
                  sx={{ width: "100%" }}
                  height={50}
                  animation="pulse"
                />
              ) : (
                <PriceRange
                  minPrice={productsData.minPrice}
                  maxPrice={productsData.maxPrice}
                />
              )}
              <SFiltersTitle>
                <Typography variant="h4">Производители</Typography>
                <Divider />
              </SFiltersTitle>
              <ManufactureFilters manufactures={manufacturesData} />
            </SSecondaryLayoutWrap>
          )}
        </SColumnsLayoutSecondaryWrap>
        <SColumnsLayoutPrimaryWrap>
          <SPrimaryLayoutWrap>
            {activeCar && <CarBanner item={activeCar} />}
            {productsLoading || !productsData || productsFetching ? (
              <>
                <Skeleton
                  variant="rounded"
                  height={44}
                  animation="pulse"
                  sx={{ width: "100%" }}
                />
                <SProductsSkeletonWrap>
                  {productsSkeletonCount.map((_item, index) => (
                    <Skeleton
                      key={index}
                      variant="rounded"
                      width={315}
                      height={300}
                      animation="pulse"
                    />
                  ))}
                </SProductsSkeletonWrap>
              </>
            ) : (
              <>
                <InfoWithSort totalLength={productsData.totalLength} />
                <SProductsWrap>
                  {productsData.products.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))}
                </SProductsWrap>
                <SShopPaginationWrap>
                  <Pagination
                    showFirstButton
                    showLastButton
                    page={page}
                    onChange={handlePaginationChange}
                    count={Math.ceil(
                      productsData.totalLength / productsData.pageSize,
                    )}
                    size="large"
                  />
                </SShopPaginationWrap>
              </>
            )}
          </SPrimaryLayoutWrap>
        </SColumnsLayoutPrimaryWrap>
      </SColumnsLayoutMainWrap>
    </Container>
  );
};

export default Shop;
