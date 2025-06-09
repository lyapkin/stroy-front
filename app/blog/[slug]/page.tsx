import { generateMetadataUtil } from "@/src/app/utils";
import { getPostApi } from "@/src/pagesFSD/post/api";
import Post from "@/src/pagesFSD/post/ui/Post";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";
import { Metadata, ResolvingMetadata } from "next";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostApi(slug);
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem link="/blog/">Блог</BreadcrumbsItem>
        <BreadcrumbsItem>{post.name}</BreadcrumbsItem>
      </Breadcrumbs>
      <Post post={post} />
    </>
  );
};

export default PostPage;

export const generateMetadata = async (
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { slug } = await params;
  const searchParamsData = await searchParams;
  const post = await getPostApi(slug);

  return generateMetadataUtil(
    parent,
    `blog/${slug}/`,
    post.metadata,
    searchParamsData
  );
};
