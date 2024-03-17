"use client";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useTheme } from "@mui/material";

import SectionTitle from "@Components/SectionTitle";
import Button from "@Components/UI/Button";
import Container from "@Components/UI/Container";
import { FormControl } from "@Components/UI/FormControl";
import { Link as MuiLink } from "@Components/UI/Link";
import List from "@Components/UI/List";
import { TextFieldControlled } from "@Components/UI/TextField";
import Textarea, { STextareaFormWrap } from "@Components/UI/Textarea";
import Typography from "@Components/UI/Typography";

import { validEmail } from "@utils/validations/email";

import vkIcon from "../../../public/icons/Vk/default.svg";

import {
  SContactUsColumn,
  SContactUsColumnWrap,
  SContactUsContactItem,
  SContactUsDisclaimer,
  SContactUsForm,
  SContactUsTitle,
} from "./styled";

import {
  ContactsEnum,
  EmailUrl,
  InstagramLink,
  KrasnodarPhoneUrl,
  MoscowPhoneUrl,
  MoscowTelegramUrl,
  VkLink,
} from "@constants/links";

interface IContactUsForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs = () => {
  const { palette } = useTheme();
  const { control, handleSubmit } = useForm<IContactUsForm>({
    mode: "onSubmit",
  });
  const [textFieldError, setTextFieldError] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const handleTextFieldChange = (newMessage: string) => {
    setMessage(newMessage);
    setTextFieldError(false);
  };

  const handleOnSubmit = (data: IContactUsForm) => {
    if (message.length === 0) {
      setTextFieldError(true);
    }
    console.log(data);
    console.log(message);
  };

  return (
    <Container>
      <SectionTitle title="Контакты" />
      <SContactUsColumnWrap>
        <SContactUsColumn>
          <SContactUsTitle variant="h3">Наши контакты</SContactUsTitle>
          <SContactUsDisclaimer variant="body2">
            Вы можете связаться с нами напрямую через предоставленные ниже контакты,
            либо заполните форму справа и мы свяжемся с вами как только сможем.
          </SContactUsDisclaimer>
          <List>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={MoscowPhoneUrl}
                sx={{ color: palette.secondary.main }}
              >
                <CallIcon htmlColor={palette.secondary.main} sx={{ fontSize: 20 }} />
                {ContactsEnum.MOSCOW_PHONE}
              </MuiLink>
              <Typography color={palette.grey[400]}>(Москва)</Typography>
            </SContactUsContactItem>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={KrasnodarPhoneUrl}
                sx={{ color: palette.secondary.main }}
              >
                <CallIcon htmlColor={palette.secondary.main} sx={{ fontSize: 20 }} />
                {ContactsEnum.KRASNODAR_PHONE}
              </MuiLink>
              <Typography color={palette.grey[400]}>(Краснодар)</Typography>
            </SContactUsContactItem>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={MoscowTelegramUrl}
                sx={{ color: palette.secondary.main, textTransform: "none" }}
              >
                <TelegramIcon
                  htmlColor={palette.secondary.main}
                  sx={{ fontSize: 20 }}
                />
                {ContactsEnum.MOSCOW_TELEGRAM}
              </MuiLink>
            </SContactUsContactItem>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={EmailUrl}
                sx={{ color: palette.secondary.main, textTransform: "none" }}
              >
                <MailOutlineIcon
                  htmlColor={palette.secondary.main}
                  sx={{ fontSize: 20 }}
                />
                {ContactsEnum.EMAIL}
              </MuiLink>
            </SContactUsContactItem>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={VkLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: palette.secondary.main, textTransform: "none" }}
              >
                <Image src={vkIcon} alt="Иконка вконтакте" width={24} height={24} />
                {ContactsEnum.VK}
              </MuiLink>
            </SContactUsContactItem>
            <SContactUsContactItem>
              <MuiLink
                component={Link}
                href={InstagramLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: palette.secondary.main, textTransform: "none" }}
              >
                <InstagramIcon htmlColor={palette.secondary.main} />
                {ContactsEnum.INSTAGRAM}
              </MuiLink>
            </SContactUsContactItem>
          </List>
        </SContactUsColumn>
        <SContactUsColumn>
          <SContactUsTitle variant="h3">Свяжитесь с нами</SContactUsTitle>
          <SContactUsForm onSubmit={handleSubmit(handleOnSubmit)}>
            <FormControl fullWidth>
              <TextFieldControlled
                fullWidth
                name="name"
                control={control}
                label="Имя"
                size="medium"
                autoComplete="given-name"
                rules={{
                  required: {
                    value: true,
                    message: "Введите имя",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextFieldControlled
                fullWidth
                name="email"
                control={control}
                label="Почта"
                autoComplete="email"
                size="medium"
                rules={{
                  required: {
                    value: true,
                    message: "Введите электронную почту",
                  },
                  pattern: {
                    value: validEmail,
                    message: "Введите действительную почту",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextFieldControlled
                fullWidth
                name="subject"
                control={control}
                label="Тема"
                autoComplete="smth"
                size="medium"
                rules={{
                  required: {
                    value: true,
                    message: "Введите тему",
                  },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <STextareaFormWrap>
                <Controller
                  render={() => (
                    <Textarea
                      placeholder="Начните писать сообщение"
                      rows={8}
                      onChange={(e) => handleTextFieldChange(e.target.value)}
                      error={textFieldError}
                      helperText={textFieldError && "Введите сообщение"}
                    />
                  )}
                  name="message"
                  control={control}
                  // rules={{
                  //   required: {
                  //     value: true,
                  //     message: "Введите сообщение",
                  //   },
                  // }}
                />
              </STextareaFormWrap>
            </FormControl>
            <Button fullWidth type="submit">
              Отправить
            </Button>
          </SContactUsForm>
        </SContactUsColumn>
      </SContactUsColumnWrap>
    </Container>
  );
};

export default ContactUs;
