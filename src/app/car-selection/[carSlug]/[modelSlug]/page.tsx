"use client";

import React, { FC } from "react";

import { useParams } from "next/navigation";

import { useGetGenerationsByModelQuery } from "@redux/rtk/GenerationsApi";

import GenerationSelectionCard from "@Components/SelectionCards/GenerationSelectionCard";
import Container from "@Components/UI/Container";
import CircularLoader from "@Components/UI/Loaders/Circular";

import { SGenerationSelection } from "./styled";

const GenerationSelection: FC = () => {
  const { modelSlug } = useParams();
  const { data: generationsData, isLoading: generationsLoading } =
    useGetGenerationsByModelQuery({
      modelSlug: modelSlug as string,
    });
  return (
    <Container>
      {generationsLoading || !generationsData ? (
        <CircularLoader />
      ) : (
        <SGenerationSelection>
          {generationsData.map((item) => (
            <GenerationSelectionCard key={item.id} item={item} href="/shop" />
          ))}
        </SGenerationSelection>
      )}
    </Container>
  );
};

export default GenerationSelection;
