import React from "react";

import Providers from "../Providers";

import type { Metadata } from "next";

import Header from "@Layout/Header";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "JdmPower | Главная",
  description: "Магазин лучшего тюнинга для японских автомобилей",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
