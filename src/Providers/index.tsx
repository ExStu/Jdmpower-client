"use client";

import React, { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@redux/store";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

// import AuthProvider from "./AuthProvider";
import jdmPower from "@themes/index";

const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={jdmPower}>
          <CssBaseline />
          {/*<AuthProvider>*/}
          {children}
          {/*</AuthProvider>*/}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </PersistGate>
  </Provider>
);

export default Providers;
