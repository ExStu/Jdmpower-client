"use client";

import { useCallback, useEffect } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useGetCategoriesQuery } from "@redux/rtk/CategoriesApi";
import { useLazyGetGenerationByIdQuery } from "@redux/rtk/GenerationsApi";
import { useGetManufacturesQuery } from "@redux/rtk/ManufacturesApi";
import { useLazyGetAllProductsQuery } from "@redux/rtk/ProductsApi";
import { getActiveCarSelected } from "@redux/selectors";

import { useTheme } from "@mui/material";

import ProductCard from "@Components/ProductCard";
import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";
import Divider from "@Components/UI/Divider";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Typography from "@Components/UI/Typography";

import {
  SCarSelectionClear,
  SCarSelectionContentWrap,
  SCarSelectionDescWrap,
  SCarSelectionWrap,
  SColumnsLayoutMainWrap,
  SColumnsLayoutPrimaryWrap,
  SColumnsLayoutSecondaryWrap,
  SFiltersTitle,
  SPrimaryLayoutWrap,
  SProductsWrap,
  SSecondaryLayoutWrap,
} from "./styled";

import { useActions } from "@Hooks/useActions";
import { useAppSelector } from "@Hooks/useRedux";
import Categories from "@app/shop/_Components/Categories";
import Manufactures from "@app/shop/_Components/Manufactures";

const Shop = () => {
  const { palette } = useTheme();
  const { resetCarSelection } = useActions();
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

  const handleClearActiveCar = () => {
    resetCarSelection();
  };

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
            <CircularLoader />
          ) : (
            <SSecondaryLayoutWrap>
              <SFiltersTitle>
                <Typography variant="h4">Категории</Typography>
                <Divider />
              </SFiltersTitle>
              <Categories categories={categoriesData} />
              <SFiltersTitle>
                <Typography variant="h4">Производители</Typography>
                <Divider />
              </SFiltersTitle>
              <Manufactures manufactures={manufacturesData} />
            </SSecondaryLayoutWrap>
          )}
        </SColumnsLayoutSecondaryWrap>
        <SColumnsLayoutPrimaryWrap>
          <SPrimaryLayoutWrap>
            {activeCar && (
              <SCarSelectionWrap>
                <Image
                  src={activeCar.image}
                  alt={activeCar.name}
                  width={230}
                  height={230}
                  style={{ objectFit: "contain" }}
                />
                <SCarSelectionContentWrap>
                  <Typography variant="h3">
                    {`${activeCar.model.car.name} ${activeCar.model.name} ${activeCar.name}`}
                  </Typography>
                  <SCarSelectionDescWrap>
                    <Typography variant="body2">Номер двигателя: </Typography>
                    <Typography variant="bodyS3">{activeCar.engine}</Typography>
                  </SCarSelectionDescWrap>
                  <SCarSelectionDescWrap>
                    <Typography variant="body2">Номер кузова: </Typography>
                    <Typography variant="bodyS3">{activeCar.chassis}</Typography>
                  </SCarSelectionDescWrap>
                  <SCarSelectionDescWrap>
                    <Typography variant="body2">Годы выпуска: </Typography>
                    <Typography variant="bodyS3">
                      {activeCar.yearFrom + "-" + activeCar.yearTo}
                    </Typography>
                  </SCarSelectionDescWrap>
                </SCarSelectionContentWrap>
                <SCarSelectionClear onClick={handleClearActiveCar}>
                  Очистить
                </SCarSelectionClear>
              </SCarSelectionWrap>
            )}
            {productsLoading || !productsData ? (
              <CircularLoader />
            ) : (
              <SProductsWrap>
                {productsData.products.map((item) => (
                  <ProductCard key={item.id} item={item} />
                ))}
              </SProductsWrap>
            )}
          </SPrimaryLayoutWrap>
        </SColumnsLayoutPrimaryWrap>
      </SColumnsLayoutMainWrap>
    </Container>
  );
};

export default Shop;
