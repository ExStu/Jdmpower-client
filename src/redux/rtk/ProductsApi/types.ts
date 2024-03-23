import { CategoryResponseDto } from "@redux/rtk/CategoriesApi/types";
import { GenerationResponseDto } from "@redux/rtk/GenerationsApi/types";
import { ManufactureResponseDto } from "@redux/rtk/ManufacturesApi/types";

export enum GetAllProductsQueryEnum {
  SORT_BY = "sortBy",
  SEARCH_TERM = "searchTerm",
  RATINGS = "ratings",
  MIN_PRICE = "minPrice",
  MAX_PRICE = "maxPrice",
  CATEGORY_ID = "categoryId",
  MANUFACTURE_ID = "manufactureId",
  GENERATION_ID = "generationId",
  PAGE_NUMBER = "pageNumber",
}

export enum ProductSortEnum {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}
export interface ProductResponseDto {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  images: string[];
  description: string;
  discount: number;
  inStock: boolean;
  category: CategoryResponseDto;
  manufacture: ManufactureResponseDto;
  generation: GenerationResponseDto;
  // reviews: [
  //   {
  //     user: {
  //       id: 1;
  //       email: "admin@admin.ru";
  //       name: "Ashly";
  //       avatarPath: "https://avatars.githubusercontent.com/u/34540438";
  //       phone: "+7 (144) 999-74-95";
  //       isAdmin: true;
  //     };
  //     createdAt: "2024-02-24T08:23:54.264Z";
  //     text: "Eligendi nam eaque vero voluptas. Totam eaque nam. Rerum eius quis eligendi mollitia qui explicabo voluptatem rerum soluta.";
  //     id: 3;
  //   },
  //   {
  //     user: {
  //       id: 1;
  //       email: "admin@admin.ru";
  //       name: "Ashly";
  //       avatarPath: "https://avatars.githubusercontent.com/u/34540438";
  //       phone: "+7 (144) 999-74-95";
  //       isAdmin: true;
  //     };
  //     createdAt: "2024-02-24T08:23:54.264Z";
  //     text: "Laboriosam suscipit quibusdam eos nobis earum totam. Cum maiores eveniet officiis veniam in error ullam assumenda. Porro sapiente natus cumque qui aliquid deleniti dolores.";
  //     id: 4;
  //   },
  // ];
}

export interface GetAllProductResponseDto {
  products: ProductResponseDto[];
  totalLength: number;
  orderBy: ProductSortEnum;
  pageSize: number;
  pageNumber: number;
  minPrice: number;
  maxPrice: number;
}

export interface GetAllProductQueryDto {
  sortBy?: ProductSortEnum;
  searchTerm?: string;
  ratings?: string;
  minPrice?: string;
  maxPrice?: string;
  categoryId?: string;
  manufactureId?: string;
  generationId?: string;
  pageNumber?: string;
}

export interface ProductSearchQueryArgDto {
  searchTerm: string;
}
