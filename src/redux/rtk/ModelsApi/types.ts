import { CarResponseDto } from "@redux/rtk/CarsApi/types";

export interface ModelResponseDto {
  id: number;
  name: string;
  image: string;
  slug: string;
  car: CarResponseDto;
}

export interface ModelsByCarArg {
  carSlug: string;
}
