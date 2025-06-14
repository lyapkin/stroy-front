import { Metadata } from "@/src/shared/types";

type ProductImage = {
  id: number;
  url: string;
};

type Characteristic = {
  id: number;
  attribute: string;
  value: string;
};

type ProductDoc = {
  id: number;
  name: string;
  url: string;
};

export type ProductBase = {
  id: number;
  slug: string;
  name: string;
  price: number;
  discount?: number;
  stock: boolean;
  attributes: Characteristic[];
};

export type ProductDetail = {
  images: ProductImage[];
  // code: string;
  description: string;
  docs: ProductDoc[];
  remainder?: number;
  metadata: Metadata;
} & ProductBase;

export type ProductPreview = {
  image: string;
} & ProductBase;

export type ProductRemainder = {
  id: ProductBase["id"];
  name: ProductBase["name"];
  slug: ProductBase["slug"];
  remainder: number;
  image: ProductPreview["image"];
};
