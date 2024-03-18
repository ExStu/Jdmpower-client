"use client";

import { FC } from "react";

import { useParams } from "next/navigation";

import { useGetModelsByCarQuery } from "@redux/rtk/ModelsApi";

import Typography from "@Components/UI/Typography";

const ModelSelection: FC = () => {
  const { slug } = useParams();
  console.log("slug: ", slug);
  const { data: modelsByCarData, isLoading: modelsByCarLoading } =
    useGetModelsByCarQuery(slug as string);
  return modelsByCarLoading || !modelsByCarData ? (
    <Typography>Loading...</Typography>
  ) : (
    modelsByCarData.map((item) => <Typography>{item.name}</Typography>)
  );
};

export default ModelSelection;
