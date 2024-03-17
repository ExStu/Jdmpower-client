import { ModelResponseDto } from "@redux/rtk/ModelsApi/types";

export interface GenerationResponseDto {
  id: number;
  name: string;
  image: string;
  slug: string;
  chassis: string;
  engine: string;
  engineVolume: string;
  yearFrom: string;
  yearTo: string;
  model: ModelResponseDto;
}
