import { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import IconButton from "@Components/UI/Button/IconButton";
import { TextFieldBase } from "@Components/UI/TextField";

import { ICartItem } from "@slices/cart/types";

import { useActions } from "@Hooks/useActions";
import { SProductQuantityActionWrap } from "@shared/ProductQuantityAction/styled";

interface IProductQuantityAction {
  item: ICartItem;
}

const ProductQuantityAction: FC<IProductQuantityAction> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions();

  const handleDecreaseQuantity = () => {
    if (item.quantity === 1) {
      removeFromCart({ id: item.product.id });
    } else {
      changeQuantity({ productId: item.product.id, type: "minus" });
    }
  };

  const handleIncreaseQuantity = () => {
    changeQuantity({ productId: item.product.id, type: "plus" });
  };

  return (
    <SProductQuantityActionWrap>
      <IconButton
        disabled={item.quantity === 0}
        onClick={handleDecreaseQuantity}
        variant="text"
      >
        <RemoveIcon />
      </IconButton>
      <TextFieldBase
        InputProps={{ readOnly: true }}
        value={`${item.quantity} шт.`}
      />
      <IconButton onClick={handleIncreaseQuantity} variant="text">
        <AddIcon />
      </IconButton>
    </SProductQuantityActionWrap>
  );
};

export default ProductQuantityAction;
