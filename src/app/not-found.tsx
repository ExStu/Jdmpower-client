"use client";

import { FC } from "react";

import Link from "next/link";

import { useTheme } from "@mui/material";

import Box from "@Components/UI/Box";
import Container from "@Components/UI/Container";
import { Link as MuiLink } from "@Components/UI/Link";
import Typography from "@Components/UI/Typography";

const NotFound: FC = () => {
  const { palette } = useTheme();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          paddingTop: "60px",
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Страница не найдена</Typography>
        <MuiLink component={Link} href="/" customColor={palette.primary.main}>
          На главную
        </MuiLink>
      </Box>
    </Container>
  );
};

export default NotFound;
