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

export type ProductPrice = {
  id: number;
  price: number;
  discount?: number;
  name: string;
};

export type ProductBase = {
  id: number;
  slug: string;
  name: string;
  stock: boolean;
  attributes: Characteristic[];
};

export type ProductDetail = {
  images: ProductImage[];
  description: string;
  docs: ProductDoc[];
  remainder?: number;
  metadata: Metadata;
  prices: ProductPrice[];
} & ProductBase;

export type ProductPreview = {
  image?: string;
  price: ProductPrice & { single: boolean };
} & ProductBase;

export type ProductCartResponse = {
  image?: string;
  prices: ProductPrice[];
} & ProductBase;

export type ProductCart = {
  image?: string;
  price: ProductPrice;
} & ProductBase;

export type ProductRemainder = {
  id: ProductBase["id"];
  name: ProductBase["name"];
  slug: ProductBase["slug"];
  remainder: number;
  image: ProductPreview["image"];
};
