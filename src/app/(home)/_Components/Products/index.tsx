import { FC } from "react";

import { SwiperSlide } from "swiper/react";

import { useGetAllProductsQuery } from "@redux/rtk/ProductsApi";

import Carousel from "@Components/Carousel";
import ProductCard from "@Components/ProductCard";
import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";

import { skeletonArray } from "@utils/skeletonCount";

import { SProducts } from "@app/(home)/_Components/Products/styled";
import Skeleton from "Components/UI/Loaders/Skeleton";

const Products: FC = () => {
  const { data: productsData, isLoading: productsLoading } = useGetAllProductsQuery(
    {},
  );
  const skeletonCount = skeletonArray(4);
  return (
    <SProducts>
      <Container>
        <SectionTitle title="Недавние товары" />
        {productsLoading && !productsData ? (
          <Box sx={{ display: "flex", gap: "20px" }}>
            {skeletonCount.map((item, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                width={330}
                height={300}
                animation="pulse"
              />
            ))}
          </Box>
        ) : (
          <Carousel slidesPerView={4} space={30} className="products-carousel">
            {productsData?.products.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
      </Container>
    </SProducts>
  );
};

export default Products;
