import { FC } from "react";

import Image from "next/image";

import { GenerationResponseDto } from "@redux/rtk/GenerationsApi/types";

import Typography from "@Components/UI/Typography";

import {
  SCarBannerClear,
  SCarBannerContentWrap,
  SCarBannerDescWrap,
  SCarBannerWrap,
} from "./styled";

import { useActions } from "@Hooks/useActions";

interface ICarBanner {
  item: GenerationResponseDto;
}
const CarBanner: FC<ICarBanner> = ({ item }) => {
  const { resetCarSelection } = useActions();
  const handleClearActiveCar = () => {
    resetCarSelection();
  };
  return (
    <SCarBannerWrap>
      <Image
        src={item.image}
        alt={item.name}
        width={230}
        height={230}
        style={{ objectFit: "contain" }}
      />
      <SCarBannerContentWrap>
        <Typography variant="h3">
          {`${item.model.car.name} ${item.model.name} ${item.name}`}
        </Typography>
        <SCarBannerDescWrap>
          <Typography variant="body2">Номер двигателя: </Typography>
          <Typography variant="bodyS3">{item.engine}</Typography>
        </SCarBannerDescWrap>
        <SCarBannerDescWrap>
          <Typography variant="body2">Номер кузова: </Typography>
          <Typography variant="bodyS3">{item.chassis}</Typography>
        </SCarBannerDescWrap>
        <SCarBannerDescWrap>
          <Typography variant="body2">Годы выпуска: </Typography>
          <Typography variant="bodyS3">
            {item.yearFrom + "-" + item.yearTo}
          </Typography>
        </SCarBannerDescWrap>
      </SCarBannerContentWrap>
      <SCarBannerClear onClick={handleClearActiveCar}>Очистить</SCarBannerClear>
    </SCarBannerWrap>
  );
};

export default CarBanner;
