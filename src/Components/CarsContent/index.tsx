import React, { FC } from "react";

import Link from "next/link";

import { useGetCarsQuery } from "@redux/rtk/CarsApi";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";

import { Link as MuiLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

const CarsContent: FC = () => {
  const { palette } = useTheme();
  const { data: carsData, isLoading: carsLoading } = useGetCarsQuery();
  return carsLoading || !carsData ? (
    <Typography>Loading...</Typography>
  ) : (
    carsData.map((item) => (
      <MuiLink
        component={Link}
        href={`/car-selection/${item.slug}`}
        variant="bodyS1"
        customColor={palette.secondary.main}
        sx={{ my: "4px" }}
        key={item.id}
      >
        {item.name}
      </MuiLink>
    ))
  );
};

export default CarsContent;
