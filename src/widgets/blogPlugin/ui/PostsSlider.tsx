import { PostPreview } from "@/src/entities/blog/model/types";
import s from "./styles.module.css";
import BaseSlider from "../../../shared/ui/slider/ui/BaseSlider";
import BlogSkeleton from "./BlogSkeleton";
import useWindowWidth from "@/src/shared/hooks/useWindowWidth";
import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { PostCard } from "@/src/entities/blog";
import cn from "classnames";

const PostsSlider = ({ data }: PostsSliderProps) => {
  const width = useWindowWidth();
  const [slidesToShow, setSlidesToShow] = useState(0);
  const [active, setActive] = useState(0);
  const ref = useRef<Slider>(null);

  useEffect(() => {
    if (!width) return;

    if (width > 1380) {
      setSlidesToShow(4);
    } else if (width > 1080) {
      setSlidesToShow(3);
    } else if (width > 580) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  }, [width]);

  if (slidesToShow === 0) {
    return <BlogSkeleton n={4} />;
  }

  const slides = data.map((item, i) => {
    return (
      <div
        key={item.id}
        className={cn(s.blog__slide, { [s.blog__slide_off]: active !== i })}
      >
        <PostCard post={item} />
      </div>
    );
  });

  return (
    <div className={s.blog__content}>
      <BaseSlider
        slides={slides}
        slidesToShow={slidesToShow}
        ref={ref}
        infinite={false}
        variableWidth={slidesToShow === 1}
        adaptiveHeight={false}
        className={s.blogPlugin__slider}
        beforeChangeCb={(_, n) => setActive(n)}
      />
    </div>
  );
};

interface PostsSliderProps {
  data: PostPreview[];
}

export default PostsSlider;
