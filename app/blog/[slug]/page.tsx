import { getPostApi } from "@/src/pagesFSD/post/api";
import Post from "@/src/pagesFSD/post/ui/Post";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostApi(slug);
  return <Post post={post} />;
};

export default PostPage;
