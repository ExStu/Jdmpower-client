import { useCallback } from "react";

export const useCreateParams = (searchParams: string, pathname: string) =>
  useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return pathname + "?" + params.toString();
    },
    [searchParams, pathname],
  );
