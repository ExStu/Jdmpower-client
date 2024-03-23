import { FC } from "react";

import Link from "next/link";

import CallIcon from "@mui/icons-material/Call";
import { useTheme } from "@mui/material";

import { Link as MuiLink } from "@Components/UI/Link";

import {
  SPhoneLinkWrap,
  SPhonePlaceText,
} from "@Layout/Header/Components/PhoneLink/styled";

interface IPhoneLink {
  href: string;
  text: string;
  placeText: string;
}

const PhoneLink: FC<IPhoneLink> = ({ href, text, placeText }) => {
  const { palette } = useTheme();

  return (
    <MuiLink component={Link} href={href}>
      <CallIcon htmlColor={palette.uncategorized.white} sx={{ fontSize: 20 }} />
      <SPhoneLinkWrap>
        {text}
        <span style={{ textTransform: "none" }}>{placeText}</span>
      </SPhoneLinkWrap>
    </MuiLink>
  );
};

export default PhoneLink;
