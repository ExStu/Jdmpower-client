export const passwordSecureChecklist = [
  { name: "Только латиница", regex: /[A-z]/, status: false },
  { name: "Минимум 8 символов", regex: /^.{8,}$/, status: false },
  { name: "Заглавные буквы", regex: /[A-Z]/, status: false },
  { name: "Прописные буквы", regex: /[a-z]/, status: false },
  // { name: "Цифры", regex: /[0-9]/, status: false },
];

export const passwordRegexp =
  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}|:"<>?~`\-=[\];',./\\]{8,}$/;
