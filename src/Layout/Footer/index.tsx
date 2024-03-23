"use client";

import type { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Container from "@Components/UI/Container";
import { Link as MuiLink } from "@Components/UI/Link";

import { SFooter, SFooterTop, SFooterTopLinks } from "./styled";

const Footer: FC = () => {
  const temp = 1;
  return (
    <SFooter>
      <Container>
        <SFooterTop>
          <MuiLink component={Link} href="/">
            <Image
              src="/icons/logo/default.svg"
              alt="Логотип JdmPower shop"
              height={80}
              width={250}
              priority
            />
          </MuiLink>
          <SFooterTopLinks>
            <MuiLink component={Link} href="/shop" variant="bodyS1">
              Магазин
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
          </SFooterTopLinks>
        </SFooterTop>
      </Container>
    </SFooter>
  );
};

export default Footer;
