import { PostContent } from "@/src/entities/blog/model/types";
import s from "./styles.module.css";
import cn from "classnames";
import "@/src/shared/styles/ck.css";

const Post = ({ post }: PostProps) => {
  return (
    <div className="page hero">
      <div className="container">
        <main>
          <div className={s.post}>
            <h1 className={cn(s.post__title, "page-title")}>{post.name}</h1>
            {post.video && (
              <div className={s.post__video}>
                <iframe
                  src={post.video}
                  width={"100%"}
                  height={"100%"}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div
              className={cn(s.post__content, s.ckContent, "ck")}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface PostProps {
  post: PostContent;
}

export default Post;
