import { Metadata, ResolvingMetadata } from "next";
import { Page } from "../shared/types";

export const generateMetadataUtil = (
  parent: ResolvingMetadata,
  pathSegment: string,
  data: Page["metadata"],
  searchParams: { [key: string]: string | string[] | undefined }
): Metadata => {
  const canonical = pathSegment;
  const robots =
    Object.keys(searchParams).length > 0 || (data && data.noindex_follow)
      ? { index: false, follow: true }
      : {};

  if (!data) {
    return {
      alternates: {
        canonical,
      },
      robots,
    };
  }

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical,
    },
    robots,
  };
};
