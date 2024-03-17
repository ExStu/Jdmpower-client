"use client";

import type { FC } from "react";
import React from "react";

import { SLink } from "./styled";

import type { SLinkProps } from "./types";

export const Link: FC<SLinkProps> = ({ ...props }) => (
  <SLink {...props} underline="none" />
);
