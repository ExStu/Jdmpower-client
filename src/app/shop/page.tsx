"use client";

import { useEffect } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useGetCategoriesQuery } from "@redux/rtk/CategoriesApi";
import { useLazyGetGenerationByIdQuery } from "@redux/rtk/GenerationsApi";
import { useGetManufacturesQuery } from "@redux/rtk/ManufacturesApi";
import { useLazyGetAllProductsQuery } from "@redux/rtk/ProductsApi";

import { useTheme } from "@mui/material";

import ProductCard from "@Components/ProductCard";
import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";
import Divider from "@Components/UI/Divider";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Typography from "@Components/UI/Typography";

import {
  SCarSelectionContentWrap,
  SCarSelectionWrap,
  SColumnsLayoutMainWrap,
  SColumnsLayoutPrimaryWrap,
  SColumnsLayoutSecondaryWrap,
  SFiltersTitle,
  SPrimaryLayoutWrap,
  SProductsWrap,
  SSecondaryLayoutWrap,
} from "./styled";

import Categories from "@app/shop/_Components/Categories";
import Manufactures from "@app/shop/_Components/Manufactures";

const Shop = () => {
  const { palette } = useTheme();
  const searchParams = useSearchParams();
  const generationId = searchParams.get("generationId");

  const [getGenerationById, { data: generationData, isLoading: generationLoading }] =
    useLazyGetGenerationByIdQuery();
  const { data: categoriesData, isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const { data: manufacturesData, isLoading: manufacturesLoading } =
    useGetManufacturesQuery();
  const [getAllProducts, { data: productsData, isLoading: productsLoading }] =
    useLazyGetAllProductsQuery();

  useEffect(() => {
    if (generationId) {
      getGenerationById({ generationId });
    }
    getAllProducts();
  }, [getGenerationById, generationId, getAllProducts]);

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
            {generationId && (generationLoading || !generationData) ? (
              <CircularLoader />
            ) : (
              generationData && (
                <SCarSelectionWrap>
                  <Image
                    src={generationData.image}
                    alt={generationData.name}
                    width={230}
                    height={230}
                  />
                  <SCarSelectionContentWrap>
                    <Typography variant="bodyS3">
                      {generationData.model.car.name}
                    </Typography>
                    <Typography variant="bodyS3">
                      {generationData.model.name}
                    </Typography>
                    <Typography variant="bodyS3">{generationData.name}</Typography>
                    <Typography variant="bodyS3">{generationData.engine}</Typography>
                    <Typography variant="bodyS3">
                      {generationData.chassis}
                    </Typography>
                    <Typography variant="bodyS3">
                      {generationData.yearFrom + "-" + generationData.yearTo}
                    </Typography>
                  </SCarSelectionContentWrap>
                </SCarSelectionWrap>
              )
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
