"use client";

import React, { FC } from "react";

import { useParams, useRouter } from "next/navigation";

import { useGetModelsByCarQuery } from "@redux/rtk/ModelsApi";

import ModelSelectionCard from "@Components/SelectionCards/ModelSelectionCard";
import Container from "@Components/UI/Container";
import CircularLoader from "@Components/UI/Loaders/Circular";

import { SModelSelection } from "@app/car-selection/[carSlug]/styled";

const ModelSelection: FC = () => {
  const { carSlug } = useParams();
  const router = useRouter();
  const { data: modelsByCarData, isLoading: modelsByCarLoading } =
    useGetModelsByCarQuery({
      carSlug: carSlug as string,
    });
  return (
    <Container>
      {modelsByCarLoading || !modelsByCarData ? (
        <CircularLoader />
      ) : (
        <SModelSelection>
          {modelsByCarData.map((item) => (
            <ModelSelectionCard
              key={item.id}
              name={item.name}
              image={item.image}
              carSlug={carSlug as string}
              modelSlug={item.slug}
            />
          ))}
        </SModelSelection>
      )}
    </Container>
  );
};

export default ModelSelection;
