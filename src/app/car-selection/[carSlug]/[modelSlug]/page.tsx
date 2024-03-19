"use client";

import React, { FC, useCallback } from "react";

import { useParams, usePathname, useSearchParams } from "next/navigation";

import { useGetGenerationsByModelQuery } from "@redux/rtk/GenerationsApi";

import GenerationSelectionCard from "@Components/SelectionCards/GenerationSelectionCard";
import Container from "@Components/UI/Container";
import CircularLoader from "@Components/UI/Loaders/Circular";

import { SGenerationSelection } from "./styled";

import { useCreateParams } from "@Hooks/useCreateParams";

const GenerationSelection: FC = () => {
  const { modelSlug } = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: generationsData, isLoading: generationsLoading } =
    useGetGenerationsByModelQuery({
      modelSlug: modelSlug as string,
    });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  console.log("search: ", pathname + "?" + createQueryString("generationId", "8"));

  return (
    <Container>
      {generationsLoading || !generationsData ? (
        <CircularLoader />
      ) : (
        <SGenerationSelection>
          {generationsData.map((item) => (
            <GenerationSelectionCard
              key={item.id}
              item={item}
              href={"/shop?" + createQueryString("generationId", item.id.toString())}
            />
          ))}
        </SGenerationSelection>
      )}
    </Container>
  );
};

export default GenerationSelection;
