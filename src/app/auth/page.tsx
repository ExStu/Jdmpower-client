// @ts-nocheck

"use client";

import { useState } from "react";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { IEmailPassword } from "@redux/rtk/AuthApi/types";
import { getAuthUser } from "@redux/selectors";

import Button from "@Components/UI/Button";
import Container from "@Components/UI/Container";
import { FormControl } from "@Components/UI/FormControl";
import { TextFieldControlled } from "@Components/UI/TextField";
import TextFieldPassword from "@Components/UI/TextFieldPassword";
import Typography from "@Components/UI/Typography";

import { validEmail } from "@utils/validations/email";
import { passwordSecureChecklist } from "@utils/validations/password";

import { useActions } from "@Hooks/useActions";
import { useAuthRedirect } from "@Hooks/useAuthRedirect";
import { useAppSelector } from "@Hooks/useRedux";
import { SAuthWrap } from "@app/auth/styled";

const Auth = () => {
  useAuthRedirect();

  const { isLoading } = useAppSelector(getAuthUser);

  const { login, register } = useActions();

  const [type, setType] = useState<"login" | "register">("login");
  const [usePasswordSecureChecklist, setPasswordSecureChecklist] = useState(
    passwordSecureChecklist,
  );
  const validatePassword = (value: string) => {
    setPasswordSecureChecklist((prevState) =>
      prevState.map((item) => ({
        ...item,
        status: item.regex.test(value),
      })),
    );
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    console.log(data);
    if (type === "login") {
      login(data);
    } else {
      register(data);
      setType("login");
    }

    reset();
  };

  return (
    <Container>
      <SAuthWrap onSubmit={handleSubmit(onSubmit)}>
        <Typography>{type === "login" ? "Войти" : "Регистрация"}</Typography>
        <FormControl fullWidth>
          <TextFieldControlled
            fullWidth
            name="email"
            control={control}
            label="Электронная почта"
            variant="filled"
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
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Введите пароль",
            },
            maxLength: {
              value: 50,
              message: "Максимальная длина – 50 символов",
            },
            // pattern: {
            //   value: passwordRegexp,
            //   message: "Пароль должен соответствовать критериям",
            // },
          }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <TextFieldPassword
              id="password"
              label="Пароль"
              variant="filled"
              size="medium"
              fullWidth
              autoComplete="new-password"
              onChange={(e) => {
                setValue("password", e.target.value);
                onChange(e);
                validatePassword(e.target.value);
              }}
              helperText={error && error.message}
              error={!!error}
              // pattern={passwordRegexp}
            />
          )}
        />
        <Button fullWidth type="submit">
          {type === "login" ? "Войти" : "Зарегистрироваться"}
        </Button>
      </SAuthWrap>
    </Container>
  );
};

export default Auth;
