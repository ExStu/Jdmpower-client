"use client";

import { useGetNewsQuery } from "@redux/rtk/NewsApi";

import NewsCard from "@Components/NewsCard";
import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";

import { skeletonArray } from "@utils/skeletonCount";

import { SNewsList } from "@app/news/styled";
import Skeleton from "Components/UI/Loaders/Skeleton";

const News = () => {
  const { data: newsData, isLoading: newsLoading } = useGetNewsQuery();
  const skeletonCount = skeletonArray(6);
  return (
    <Container>
      <SectionTitle title="Новости" />
      {!newsData || newsLoading ? (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          {skeletonCount.map((item, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={400}
              height={400}
              animation="pulse"
            />
          ))}
        </Box>
      ) : (
        <SNewsList>
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </SNewsList>
      )}
    </Container>
  );
};

export default News;
