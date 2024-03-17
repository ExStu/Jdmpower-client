import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatToDayMonth = (date: string) =>
  format(date, "dd MMMM", { locale: ru });
