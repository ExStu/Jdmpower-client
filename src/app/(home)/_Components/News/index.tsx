import { SwiperSlide } from "swiper/react";

import { useGetNewsQuery } from "@redux/rtk/NewsApi";

import Carousel from "@Components/Carousel";
import NewsCard from "@Components/NewsCard";
import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";

import { SNews } from "./styled";

import { skeletonCount } from "@constants/skeletonCount";
import Skeleton from "Components/UI/Loaders/Skeleton";

const News = () => {
  const { data: newsData, isLoading: newsLoading } = useGetNewsQuery();

  return (
    <SNews>
      <Container>
        <SectionTitle title="Новости" />
        {newsLoading && !newsData ? (
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
          <Carousel slidesPerView={4} space={30} className="news-carousel">
            {newsData?.map((item) => (
              <SwiperSlide key={item.id}>
                <NewsCard item={item} />
              </SwiperSlide>
            ))}
          </Carousel>
        )}
      </Container>
    </SNews>
  );
};

export default News;
