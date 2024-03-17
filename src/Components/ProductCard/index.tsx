import { FC } from "react";

import Image from "next/image";

import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import PriceWithDiscount from "@Components/PriceWithDiscount";
import {
  SProductCard,
  SProductCardActionsWrap,
  SProductCardChipsWrap,
  SProductCardContent,
} from "@Components/ProductCard/styled";
import Button from "@Components/UI/Button";
import Chip from "@Components/UI/Chip";
import Typography from "@Components/UI/Typography";

import { useActions } from "@Hooks/useActions";
import { useCart } from "@Hooks/useCart";
import ProductQuantityAction from "@shared/ProductQuantityAction";

interface IProductCard {
  item: ProductResponseDto;
}

const ProductCard: FC<IProductCard> = ({ item }) => {
  const { cartItems } = useCart();
  const { addToCart, removeFromCart } = useActions();
  const alreadyInCart = cartItems.find(
    (currentItem) => currentItem.product.id === item.id,
  );

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <SProductCard>
      {(item.discount > 0 || item.inStock) && (
        <SProductCardChipsWrap>
          {item.discount > 0 && (
            <Chip
              label={`- ${item.discount.toString()}%`}
              sx={{ backgroundColor: "primary.main", color: "white" }}
            />
          )}
          {item.inStock && (
            <Chip
              label="В наличии"
              sx={{ backgroundColor: "success.main", color: "white" }}
            />
          )}
        </SProductCardChipsWrap>
      )}
      <Image src={item.images[0]} alt={item.name} width={330} height={300} />
      <SProductCardContent>
        <Typography variant="bodyS3">{item.name}</Typography>
        <Typography variant="body1">{`Артикул: ${item.sku}`}</Typography>
        <PriceWithDiscount direction="row" item={item} />
        <SProductCardActionsWrap>
          {alreadyInCart ? (
            <ProductQuantityAction item={alreadyInCart} />
          ) : (
            <Button startIcon={<ShoppingBasketIcon />} onClick={handleAddToCart}>
              В корзину
            </Button>
          )}
          {/*<IconButton>*/}
          {/*  <FavoriteBorderIcon />*/}
          {/*</IconButton>*/}
        </SProductCardActionsWrap>
      </SProductCardContent>
    </SProductCard>
  );
};

export default ProductCard;
