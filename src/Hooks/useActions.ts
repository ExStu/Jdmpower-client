import { useMemo } from "react";

import { bindActionCreators } from "@reduxjs/toolkit";

import { rootActions } from "@redux/actions";

import { useAppDispatch } from "@Hooks/useRedux";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
