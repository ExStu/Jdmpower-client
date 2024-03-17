import { FC } from "react";

import Image from "next/image";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import PriceWithDiscount from "@Components/PriceWithDiscount";
import IconButton from "@Components/UI/Button/IconButton";
import Typography from "@Components/UI/Typography";

import {
  SCartItem,
  SCartItemActions,
  SCartItemContent,
  SCartItemTop,
} from "../styled";
import { ICartItemComponent } from "../types";

import { useActions } from "@Hooks/useActions";
import ProductQuantityAction from "@shared/ProductQuantityAction";

const CartItemSmall: FC<ICartItemComponent> = ({ item }) => {
  const { removeFromCart } = useActions();

  const handleDeleteCartItem = (id: number) => {
    removeFromCart({ id });
  };

  return (
    <SCartItem>
      <SCartItemTop>
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          width={100}
          height={100}
        />
        <SCartItemContent>
          <Typography variant="bodyS1">{item.product.name}</Typography>
          <Typography>{`Артикул: ${item.product.sku}`}</Typography>
          <PriceWithDiscount
            direction="column"
            item={item.product}
            quantity={item.quantity}
          />
        </SCartItemContent>
      </SCartItemTop>
      <SCartItemActions>
        <ProductQuantityAction item={item} />
        <IconButton
          variant="text"
          onClick={() => handleDeleteCartItem(item.product.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </SCartItemActions>
    </SCartItem>
  );
};

export default CartItemSmall;
