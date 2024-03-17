import { FC, PropsWithChildren, useEffect } from "react";

import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

import { getAuthUser } from "@redux/selectors";

import { getAccessToken } from "@utils/authTokens";

import { protectedRoutes } from "./protectedRoutes";

import { useActions } from "@Hooks/useActions";
import { useAppSelector } from "@Hooks/useRedux";
import Auth from "@app/auth/page";
import NotFound from "@app/not-found";
import { REFRESH_TOKEN } from "@constants/tokens";
import { ADMIN_PANEL_URL } from "@constants/url";

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { user } = useAppSelector(getAuthUser);
  const { checkAuth, logout } = useActions();

  const pathname = usePathname();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    const refreshToken = Cookies.get(REFRESH_TOKEN);
    if (!refreshToken && user) logout();
  }, [pathname, logout, user]);

  const router = useRouter();

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route),
  );

  const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL);

  if (!isProtectedRoute && !isAdminRoute) return <>{children}</>;

  if (user?.isAdmin) return <>{children}</>;
  if (user && isProtectedRoute) return <>{children}</>;

  if (user && isAdminRoute) return <NotFound />;

  if (pathname !== "/auth") return <Auth />;

  return null;
};

export default AuthProvider;
