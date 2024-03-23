// @ts-nocheck

import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useDebouncedCallback } from "use-debounce";

import {
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
  useLazyGetProductsBySearchQuery,
} from "@redux/rtk/ProductsApi";
import {
  GetAllProductsQueryEnum,
  ProductResponseDto,
} from "@redux/rtk/ProductsApi/types";
import { getCartItems } from "@redux/selectors";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SwipeableDrawer, useTheme } from "@mui/material";
import Badge from "@mui/material/Badge";

import CartContent from "@Components/CartContent";
import Autocomplete, { AutocompleteControlled } from "@Components/UI/Autocomplete";
import IconButton from "@Components/UI/Button/IconButton";
import Container from "@Components/UI/Container";
import Drawer from "@Components/UI/Drawer";
import { Link as MuiLink } from "@Components/UI/Link";
import CircularLoader from "@Components/UI/Loaders/Circular";
import Skeleton from "@Components/UI/Loaders/Skeleton";
import TextField from "@Components/UI/TextField";
import Typography from "@Components/UI/Typography";

import { skeletonArray } from "@utils/skeletonCount";

import {
  SHeaderBorderSection,
  SHeaderMiddleActions,
  SHeaderMiddleSearchBtn,
  SHeaderMiddleSearchNotFound,
  SHeaderMiddleSearchOptionContent,
  SHeaderMiddleSearchOptionWrap,
  SHeaderMiddleSearchWrap,
  SHeaderMiddleWrap,
} from "../styled";

import { useFilters } from "@Hooks/useFilters";
import { useAppSelector } from "@Hooks/useRedux";

const HeaderMiddle: FC = () => {
  const { palette } = useTheme();
  const skeletonCount = skeletonArray(3);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const cartItems = useAppSelector(getCartItems);
  const { createQueryString } = useFilters();
  const { control, setValue } = useForm();

  const [autocompleteValue, setAutocompleteValue] = useState<string | null>(null);
  const [productsList, setProductsList] = useState<ProductResponseDto[]>([]);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [
    searchProducts,
    {
      data: searchProductsData,
      isLoading: searchProductsLoading,
      isFetching: searchProductsFetching,
    },
  ] = useLazyGetProductsBySearchQuery();

  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  const searchProductsDebounced = useDebouncedCallback((searchTerm: string) => {
    searchProducts({
      searchTerm,
    });
  }, 300);

  const handleSearch = (value: string) => {
    if (value) {
      router.push(
        pathname +
          "?" +
          createQueryString(GetAllProductsQueryEnum.SEARCH_TERM, value),
      );
    }
  };

  const handleAutocompleteValue = (value: string) => {
    setAutocompleteValue(value);
  };

  useEffect(() => {
    if (searchProductsData) {
      setProductsList(searchProductsData || []);
    }
  }, [searchProductsData]);

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
            <AutocompleteControlled
              control={control}
              name="search"
              fullWidth
              options={searchProductsData || []}
              getOptionLabel={(option: ProductResponseDto) => option.name ?? option}
              filterOptions={(x: any) => x}
              renderOption={(props, option) => (
                <SHeaderMiddleSearchOptionWrap {...props} key={option.name}>
                  <Image
                    src={option.images[0]}
                    alt={option.name}
                    width={50}
                    height={50}
                  />
                  <SHeaderMiddleSearchOptionContent>
                    <Typography>{option.name}</Typography>
                    <Typography>Артикул: {option.sku}</Typography>
                  </SHeaderMiddleSearchOptionContent>
                </SHeaderMiddleSearchOptionWrap>
              )}
              onChange={(v: string) => {
                if (v && v.length > 2) {
                  searchProductsDebounced(v);
                }
                setSearchQuery(v);
              }}
              onSelect={(e, v) => {
                handleAutocompleteValue(v);
              }}
              placeholder="Поиск по названию или артикулу"
              loading={searchProductsLoading || searchProductsFetching}
              loadingText={skeletonCount.map((_item, index) => (
                <Skeleton key={index} sx={{ width: "100%" }} height={60} />
              ))}
              noOptionsText={
                <SHeaderMiddleSearchNotFound>
                  <Typography>Ничего не нашлось</Typography>
                </SHeaderMiddleSearchNotFound>
              }
            />
            <SHeaderMiddleSearchBtn onClick={() => handleSearch(searchQuery)}>
              Поиск
            </SHeaderMiddleSearchBtn>
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
