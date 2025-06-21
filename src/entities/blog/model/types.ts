import { Metadata } from "@/src/shared/types";

export type BlogCategory = {
  id: number;
  name: string;
};

export type PostPreview = {
  id: number;
  name: string;
  slug: string;
  excerpt: string;
  preview: string;
};

export type PostContent = {
  id: number;
  name: string;
  video?: string;
  content: string;
  metadata: Metadata | null;
};
