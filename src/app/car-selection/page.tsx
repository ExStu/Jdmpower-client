"use client";

import { FC } from "react";

import { useGetCarsQuery } from "@redux/rtk/CarsApi";

import CarSelectionCard from "@Components/SelectionCards/CarSelectionCard";
import Container from "@Components/UI/Container";
import CircularLoader from "@Components/UI/Loaders/Circular";

import { SCarSelectionWrap } from "./styled";

const CarSelection: FC = () => {
  const { data: carsData, isLoading: carsLoading } = useGetCarsQuery();
  return (
    <Container>
      {carsLoading || !carsData ? (
        <CircularLoader />
      ) : (
        <SCarSelectionWrap>
          {carsData.map((item) => (
            <CarSelectionCard
              key={item.id}
              name={item.name}
              image={item.image}
              carSlug={item.slug}
            />
          ))}
        </SCarSelectionWrap>
      )}
    </Container>
  );
};

export default CarSelection;
