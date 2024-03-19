"use client";

import { useEffect } from "react";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { useLazyGetGenerationByIdQuery } from "@redux/rtk/GenerationsApi";

import { useTheme } from "@mui/material";

import SectionTitle from "@Components/SectionTitle";
import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Typography from "@Components/UI/Typography";

const Shop = () => {
  const { palette } = useTheme();
  const searchParams = useSearchParams();
  const generationId = searchParams.get("generationId");
  const [getGenerationById, { data: generationData, isLoading: generationLoading }] =
    useLazyGetGenerationByIdQuery();

  useEffect(() => {
    if (generationId) {
      getGenerationById({ generationId });
    }
  }, [getGenerationById, generationId]);

  return (
    <Container>
      <SectionTitle title="Каталог" />
      {generationId && (generationLoading || !generationData) ? (
        <CircularLoader />
      ) : (
        generationData && (
          <Box
            sx={{
              border: `2px solid ${palette.uncategorized.border}`,
              display: "flex",
              gap: "12px",
            }}
          >
            <Image
              src={generationData.image}
              alt={generationData.name}
              width={300}
              height={300}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Typography>{generationData.model.car.name}</Typography>
              <Typography>{generationData.model.name}</Typography>
              <Typography>{generationData.name}</Typography>
              <Typography>{generationData.engine}</Typography>
              <Typography>{generationData.chassis}</Typography>
              <Typography>
                {generationData.yearFrom + "-" + generationData.yearTo}
              </Typography>
            </Box>
          </Box>
        )
      )}
    </Container>
  );
};

export default Shop;
