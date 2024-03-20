import { FC } from "react";

import Typography from "@Components/UI/Typography";

import { SInfoWithSort } from "./styled";

interface IInfoWithSort {
  totalLength: number;
}
const InfoWithSort: FC<IInfoWithSort> = ({ totalLength }) => {
  const temp = 1;

  return (
    <SInfoWithSort>
      <Typography>{`Всего товаров: ${totalLength.toString()}`}</Typography>
    </SInfoWithSort>
  );
};

export default InfoWithSort;
