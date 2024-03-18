import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import { Popover, useTheme } from "@mui/material";

import CarsContent from "@Components/CarsContent";
import Container from "@Components/UI/Container";
import { Link as MuiLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

import vkIcon from "../../../../public/icons/Vk/default.svg";
import {
  SHeaderBottom,
  SHeaderBottomCarsBtn,
  SHeaderBottomSocials,
  SHeaderBottomWrap,
} from "../styled";

const HeaderBottom: FC = () => {
  const { palette } = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <SHeaderBottom>
      <Container>
        <SHeaderBottomWrap>
          <SHeaderBottomCarsBtn
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            <MenuIcon htmlColor={palette.uncategorized.white} />
            Все автомобили
          </SHeaderBottomCarsBtn>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <CarsContent />
          </Popover>
          <MuiLink
            component={Link}
            href="/shop"
            variant="bodyS1"
            sx={{ gap: "4px" }}
          >
            Магазин
            <ExpandMoreIcon htmlColor={palette.uncategorized.white} />
          </MuiLink>
          <MuiLink component={Link} href="/news" variant="bodyS1">
            Новости
          </MuiLink>
          <MuiLink component={Link} href="/about-us" variant="bodyS1">
            О нас
          </MuiLink>
          <MuiLink component={Link} href="/contact-us" variant="bodyS1">
            Контакты
          </MuiLink>
          <MuiLink
            component={Link}
            href="http://ssr.jdmpower.ru/"
            target="_blank"
            rel="noopener noreferrer"
            variant="bodyS1"
          >
            SSR диски
          </MuiLink>
          <SHeaderBottomSocials>
            <MuiLink
              component={Link}
              href="https://www.instagram.com/jdmpowershop?igsh=d2VzNTZzZHFwNXMz"
              target="_blank"
              rel="noopener noreferrer"
              variant="bodyS1"
            >
              <InstagramIcon htmlColor={palette.uncategorized.white} />
            </MuiLink>
            <MuiLink
              component={Link}
              href="https://vk.com/jdmpowershop"
              target="_blank"
              rel="noopener noreferrer"
              variant="bodyS1"
            >
              <Image src={vkIcon} alt="Иконка вконтакте" width={24} height={24} />
            </MuiLink>
          </SHeaderBottomSocials>
        </SHeaderBottomWrap>
      </Container>
    </SHeaderBottom>
  );
};

export default HeaderBottom;
