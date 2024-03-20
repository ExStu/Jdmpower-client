import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { GenerationResponseDto } from "@redux/rtk/GenerationsApi/types";

import { SCarSelectionCard } from "@Components/SelectionCards/CarSelectionCard/styled";
import { Link as MuiLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

import { useActions } from "@Hooks/useActions";

interface ICarSelectionCard {
  item: GenerationResponseDto;
  href?: string;
}

const GenerationSelectionCard: FC<ICarSelectionCard> = ({ item, href }) => {
  const { setActiveCar } = useActions();

  const handleSaveCar = (item: GenerationResponseDto) => {
    setActiveCar(item);
  };

  return (
    <MuiLink component={Link} href={href} onClick={() => handleSaveCar(item)}>
      <SCarSelectionCard>
        <Image
          src={item.image}
          alt={item.name}
          width={150}
          height={150}
          style={{ objectFit: "contain" }}
        />
        <Typography variant="bodyS1">{`Поколение: ${item.name}`}</Typography>
        <Typography variant="bodyS1">{`Номер кузова: ${item.chassis}`}</Typography>
        <Typography variant="bodyS1">{`Двигатель: ${item.engine}`}</Typography>
        <Typography variant="bodyS1">{`Объем двигателя: ${item.engineVolume}`}</Typography>
        <Typography variant="bodyS1">{`Годы выпуска: ${item.yearFrom}-${item.yearTo}`}</Typography>
      </SCarSelectionCard>
    </MuiLink>
  );
};

export default GenerationSelectionCard;
