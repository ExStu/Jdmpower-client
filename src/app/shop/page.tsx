"use client";

import { useCallback, useEffect } from "react";

import { useSearchParams } from "next/navigation";

import { useGetCategoriesQuery } from "@redux/rtk/CategoriesApi";
import { useLazyGetGenerationByIdQuery } from "@redux/rtk/GenerationsApi";
import { useGetManufacturesQuery } from "@redux/rtk/ManufacturesApi";
import { useLazyGetAllProductsQuery } from "@redux/rtk/ProductsApi";
import { getActiveCarSelected } from "@redux/selectors";

import { useTheme } from "@mui/material";

import CarBanner from "@Components/CarBanner";
import ProductCard from "@Components/ProductCard";
import SectionTitle from "@Components/SectionTitle";
import Container from "@Components/UI/Container";
import Divider from "@Components/UI/Divider";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Skeleton from "@Components/UI/Loaders/Skeleton";
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
} from "./styled";

import { useAppSelector } from "@Hooks/useRedux";
import InfoWithSort from "@app/shop/_Components/InfoWithSort";

const Shop = () => {
  const { palette } = useTheme();
  const productsSkeletonCount = skeletonArray(6);
  const activeCar = useAppSelector(getActiveCarSelected);
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: manufacturesData, isLoading: manufacturesLoading } =
    useGetManufacturesQuery();
  const [getAllProducts, { data: productsData, isLoading: productsLoading }] =
    useLazyGetAllProductsQuery();

  useEffect(() => {
    if (activeCar) {
      getAllProducts({
        generationId: activeCar.id.toString(),
      });
    } else {
      getAllProducts({});
    }
  }, [getAllProducts, activeCar]);

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
            {productsLoading || !productsData ? (
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
                      width={330}
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
              </>
            )}
          </SPrimaryLayoutWrap>
        </SColumnsLayoutPrimaryWrap>
      </SColumnsLayoutMainWrap>
    </Container>
  );
};

export default Shop;
