import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { getAuthUser } from "@redux/selectors";

import { useAppSelector } from "@Hooks/useRedux";

export const useAuthRedirect = () => {
  const { user } = useAppSelector(getAuthUser);

  const { replace } = useRouter();

  useEffect(() => {
    if (user) replace("/");
  }, [user, replace]);
};
