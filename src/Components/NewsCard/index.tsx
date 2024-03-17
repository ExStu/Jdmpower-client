import { FC, useState } from "react";

import Image from "next/image";

import { NewsResponseDto } from "@redux/rtk/NewsApi/types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Button from "@Components/UI/Button";
import Divider from "@Components/UI/Divider";
import Modal, { ModalBox } from "@Components/UI/Modal";
import Typography from "@Components/UI/Typography";

import { formatToDayMonth } from "@utils/formatters/dates";

import {
  SNewsCard,
  SNewsCardClampText,
  SNewsCardContent,
  SNewsCardContentTitles,
  SNewsModalContent,
} from "./styled";

interface INewsCard {
  item: NewsResponseDto;
}

const NewsCard: FC<INewsCard> = ({ item }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <SNewsCard>
        <Image src={item.image} alt={item.title} width={330} height={300} />
        <SNewsCardContent>
          <SNewsCardContentTitles>
            <SNewsCardClampText variant="bodyS3" component="h3">
              {item.title}
            </SNewsCardClampText>
            <Typography variant="bodyS1">
              {formatToDayMonth(item.createdAt)}
            </Typography>
          </SNewsCardContentTitles>
          <SNewsCardClampText variant="body1">{item.description}</SNewsCardClampText>
          <Divider />
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            onClick={toggleModal}
          >
            Читать полностью
          </Button>
        </SNewsCardContent>
      </SNewsCard>
      {open && (
        <Modal open={open} onClose={toggleModal}>
          <ModalBox onClose={toggleModal}>
            <SNewsModalContent>
              <Image src={item.image} alt={item.title} width={400} height={350} />
              <SNewsCardContentTitles>
                <Typography variant="h3">{item.title}</Typography>
                <Typography variant="bodyS2">
                  {formatToDayMonth(item.createdAt)}
                </Typography>
              </SNewsCardContentTitles>
              <Divider sx={{ width: "100%" }} />
              <Typography
                variant="body1"
                sx={{ fontSize: "18px", textAlign: "left" }}
              >
                {item.description}
              </Typography>
            </SNewsModalContent>
          </ModalBox>
        </Modal>
      )}
    </>
  );
};

export default NewsCard;
