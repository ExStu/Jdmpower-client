import { ChangeEvent, FC, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useGetAllProductsQuery } from "@redux/rtk/ProductsApi";
import { ProductResponseDto } from "@redux/rtk/ProductsApi/types";
import { getCartItems } from "@redux/selectors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SwipeableDrawer, useTheme } from "@mui/material";
import Badge from "@mui/material/Badge";

import CartContent from "@Components/CartContent";
import Autocomplete from "@Components/UI/Autocomplete";
import IconButton from "@Components/UI/Button/IconButton";
import Container from "@Components/UI/Container";
import Drawer from "@Components/UI/Drawer";
import { Link as MuiLink } from "@Components/UI/Link";
import TextField from "@Components/UI/TextField";

import {
  SHeaderBorderSection,
  SHeaderMiddleActions,
  SHeaderMiddleSearchBtn,
  SHeaderMiddleSearchWrap,
  SHeaderMiddleWrap,
} from "../styled";

import { useAppSelector } from "@Hooks/useRedux";

const HeaderMiddle: FC = () => {
  const { palette } = useTheme();
  const cartItems = useAppSelector(getCartItems);
  const { control, setValue } = useForm();
  const [autocompleteValue, setAutocompleteValue] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: productsData, isLoading: productsLoading } = useGetAllProductsQuery(
    {},
  );
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  return (
    <SHeaderBorderSection>
      <Container>
        <SHeaderMiddleWrap>
          <MuiLink component={Link} href="/">
            <Image
              src="/icons/logo/default.svg"
              alt="Логотип JdmPower shop"
              height={80}
              width={250}
              priority
            />
          </MuiLink>
          <SHeaderMiddleSearchWrap>
            <Autocomplete
              freeSolo
              value={autocompleteValue}
              onChange={(event: any, newValue: string | null) => {
                setAutocompleteValue(newValue);
              }}
              inputValue={searchQuery}
              onInputChange={(event: any, newInputValue: string) => {
                setSearchQuery(newInputValue);
              }}
              options={productsData?.products || []}
              getOptionLabel={(option: ProductResponseDto) => option.name ?? option}
              sx={{ width: "100%" }}
              filterOptions={(x: any) => x}
              renderInput={(params: any) => (
                <TextField
                  placeholder="Поиск по названию или артикулу"
                  {...params}
                />
              )}
            />
            <SHeaderMiddleSearchBtn>Поиск</SHeaderMiddleSearchBtn>
          </SHeaderMiddleSearchWrap>

          <SHeaderMiddleActions>
            {/*<Badge*/}
            {/*  badgeContent={10}*/}
            {/*  anchorOrigin={{*/}
            {/*    vertical: "top",*/}
            {/*    horizontal: "left",*/}
            {/*  }}*/}
            {/*  color="warning"*/}
            {/*  max={9}*/}
            {/*>*/}
            {/*  <IconButton variant="contained">*/}
            {/*    <FavoriteBorderIcon htmlColor={palette.uncategorized.white} />*/}
            {/*  </IconButton>*/}
            {/*</Badge>*/}
            <Badge
              badgeContent={cartItems.length}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              // color="warning"
            >
              <IconButton variant="contained" onClick={toggleDrawer}>
                <ShoppingCartIcon htmlColor={palette.uncategorized.white} />
              </IconButton>
            </Badge>
            <Drawer
              // anchor="right"
              open={open}
              onClose={toggleDrawer}
              onOpen={toggleDrawer}
            >
              <CartContent toggleDrawer={toggleDrawer} />
            </Drawer>
          </SHeaderMiddleActions>
        </SHeaderMiddleWrap>
      </Container>
    </SHeaderBorderSection>
  );
};

export default HeaderMiddle;
