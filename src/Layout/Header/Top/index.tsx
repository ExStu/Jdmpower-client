import { FC, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { useGetCurrenciesQuery } from "@redux/rtk/CurrenciesApi";
import { getActiveCurrency } from "@redux/selectors";

import CallIcon from "@mui/icons-material/Call";
import { MenuItem, useTheme } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";
import Divider from "@Components/UI/Divider";
import { Link as MuiLink } from "@Components/UI/Link";
import { SelectControlled } from "@Components/UI/Select";
import Skeleton from "@Components/UI/Skeleton";

import {
  SHeaderBorderSection,
  SHeaderFormSelect,
  SHeaderTopPhonesWrap,
  SHeaderTopWrap,
} from "../styled";

import { useActions } from "@Hooks/useActions";
import { useAppSelector } from "@Hooks/useRedux";

const HeaderTop: FC = () => {
  const { palette } = useTheme();
  const { setActive } = useActions();
  const currencyItem = useAppSelector(getActiveCurrency);
  const { control, setValue } = useForm();

  const { data: currencyData, isLoading: currencyLoading } = useGetCurrenciesQuery();
  const handleCurrencyChange = (e: SelectChangeEvent<unknown>) => {
    const currency = currencyData?.find((item) => item.name === e.target.value);
    if (currency) {
      setActive(currency);
    }
  };

  useEffect(() => {
    if (currencyData) {
      const defaultCurrency = currencyData.find((item) => item.value === 1);
      if (defaultCurrency) {
        setActive(defaultCurrency);
        setValue("selectCurrency", defaultCurrency.name);
      }
    }
  }, [currencyData, setActive, setValue]);

  return (
    <SHeaderBorderSection>
      <Container>
        <SHeaderTopWrap>
          {currencyLoading || !currencyItem ? (
            <Skeleton
              variant="rectangular"
              width={200}
              height={46}
              animation="pulse"
              sx={{ bgcolor: "grey.700" }}
            />
          ) : (
            <SHeaderFormSelect variant="standard">
              <SelectControlled
                name="selectCurrency"
                control={control}
                onChange={(e) => handleCurrencyChange(e)}
              >
                {currencyData?.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <Image
                        src={`/icons/${item.name}/default.svg`}
                        alt="icon"
                        width={30}
                        height={30}
                        priority
                      />
                      {item.name}
                    </Box>
                  </MenuItem>
                ))}
              </SelectControlled>
            </SHeaderFormSelect>
          )}
          <SHeaderTopPhonesWrap>
            <MuiLink component={Link} href="tel:89191025217">
              <CallIcon
                htmlColor={palette.uncategorized.white}
                sx={{ fontSize: 20 }}
              />
              +7 (919) 102-52-17
            </MuiLink>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: palette.uncategorized.white, opacity: "0.5" }}
            />
            <MuiLink component={Link} href="tel:+79288807252">
              <CallIcon
                htmlColor={palette.uncategorized.white}
                sx={{ fontSize: 20 }}
              />
              +7 (928) 880-72-52
            </MuiLink>
          </SHeaderTopPhonesWrap>
          {/*<SHeaderTopLinksWrap>*/}
          {/*  <MuiLink component={Link} href="/auth">*/}
          {/*    Регистрация*/}
          {/*  </MuiLink>*/}
          {/*  <MuiLink component={Link} href="/auth">*/}
          {/*    Войти*/}
          {/*  </MuiLink>*/}
          {/*</SHeaderTopLinksWrap>*/}
        </SHeaderTopWrap>
      </Container>
    </SHeaderBorderSection>
  );
};

export default HeaderTop;
