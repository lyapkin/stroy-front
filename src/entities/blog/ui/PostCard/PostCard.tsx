import Image from "next/image";
import { PostPreview } from "../../model/types";
import s from "./styles.module.css";
import Link from "next/link";

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className={s.card}>
      <Link href={`/blog/${post.slug}/`} className={s.card__image}>
        <Image
          src={post.preview}
          alt={post.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </Link>
      <h3 className={s.card__title}>
        <Link href={`/blog/${post.slug}/`}>{post.name}</Link>
      </h3>
      <p className={s.card__excerpt}>{post.excerpt}</p>
      <Link href={`/blog/${post.slug}/`} className={s.card__link}>
        Читать подробнее
      </Link>
    </article>
  );
};

interface PostCardProps {
  post: PostPreview;
}

export default PostCard;
