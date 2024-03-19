import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { SCarSelectionCard } from "@Components/SelectionCards/CarSelectionCard/styled";
import { Link as MuiLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

interface ICarSelectionCard {
  name: string;
  image: string;
  carSlug?: string;
  modelSlug?: string;
}

const ModelSelectionCard: FC<ICarSelectionCard> = ({
  name,
  image,
  carSlug,
  modelSlug,
}) => {
  const temp = 1;
  return (
    <MuiLink component={Link} href={`${carSlug}/${modelSlug}`}>
      <SCarSelectionCard>
        <Image src={image} alt={name} width={150} height={150} />
        <Typography variant="bodyS1">{name}</Typography>
      </SCarSelectionCard>
    </MuiLink>
  );
};

export default ModelSelectionCard;
