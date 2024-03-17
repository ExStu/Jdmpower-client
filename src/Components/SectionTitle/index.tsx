import { FC } from "react";

import Divider from "@Components/UI/Divider";
import Typography from "@Components/UI/Typography";

interface ISectionTitle {
  title: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title }) => (
  <Divider textAlign="left" sx={{ marginBottom: "20px" }}>
    <Typography variant="h2">{title}</Typography>
  </Divider>
);

export default SectionTitle;
