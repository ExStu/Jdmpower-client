import React, { FC } from "react";

import Link from "next/link";

import { useGetCarsQuery } from "@redux/rtk/CarsApi";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material";

import {
  SCarsContent,
  SCarsContentBottom,
  SCarsContentTop,
} from "@Components/CarsContent/styled";
import Divider from "@Components/UI/Divider";
import { Link as MuiLink } from "@Components/UI/Link";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Typography from "@Components/UI/Typography";

interface ICarsContent {
  handleClose: () => void;
}

const CarsContent: FC<ICarsContent> = ({ handleClose }) => {
  const { palette } = useTheme();
  const { data: carsData, isLoading: carsLoading } = useGetCarsQuery();

  return (
    <SCarsContent>
      {carsLoading || !carsData ? (
        <CircularLoader />
      ) : (
        <>
          <SCarsContentTop>
            {carsData.map((item) => (
              <MuiLink
                component={Link}
                href={`/car-selection/${item.slug}`}
                onClick={handleClose}
                variant="bodyS1"
                customColor={palette.secondary.main}
                sx={{ my: "4px" }}
                key={item.id}
              >
                {item.name}
              </MuiLink>
            ))}
          </SCarsContentTop>
          <Divider />
          <SCarsContentBottom>
            <MuiLink
              component={Link}
              href="/car-selection"
              onClick={handleClose}
              variant="bodyS1"
              customColor={palette.primary.main}
            >
              Посмотреть все машины
            </MuiLink>
          </SCarsContentBottom>
        </>
      )}
    </SCarsContent>
  );
};

export default CarsContent;
