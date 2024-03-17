import { FC } from "react";

import Image from "next/image";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import PriceWithDiscount from "@Components/PriceWithDiscount";
import IconButton from "@Components/UI/Button/IconButton";
import Typography from "@Components/UI/Typography";

import {
  SCartItemContent,
  SCartItemTop,
  SCartItemWide,
  SCartItemWideActions,
} from "../styled";
import { ICartItemComponent } from "../types";

import { useActions } from "@Hooks/useActions";
import ProductQuantityAction from "@shared/ProductQuantityAction";

const CartItemWide: FC<ICartItemComponent> = ({ item }) => {
  const { removeFromCart } = useActions();

  const handleDeleteCartItem = (id: number) => {
    removeFromCart({ id });
  };

  return (
    <SCartItemWide>
      <SCartItemTop>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          width={120}
          height={120}
        />
        <SCartItemContent>
          <Typography variant="bodyS1">{item.product.name}</Typography>
          <Typography>{`Артикул: ${item.product.sku}`}</Typography>
          <IconButton
            variant="text"
            onClick={() => handleDeleteCartItem(item.product.id)}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </SCartItemContent>
      </SCartItemTop>
      <SCartItemWideActions>
        <PriceWithDiscount
          direction="row"
          item={item.product}
          quantity={item.quantity}
        />
        <ProductQuantityAction item={item} />
      </SCartItemWideActions>
    </SCartItemWide>
  );
};

export default CartItemWide;
