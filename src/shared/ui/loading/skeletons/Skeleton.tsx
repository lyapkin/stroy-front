import s from "../styles.module.css";
import cn from "classnames";

const Skeleton = ({ light = false }: { light?: boolean }) => {
  return <span className={cn(s.skeleton, { [s.light]: light })}></span>;
};

export default Skeleton;
