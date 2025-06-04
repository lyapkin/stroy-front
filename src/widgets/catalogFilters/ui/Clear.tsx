import Link from "next/link";
import s from "./styles.module.css";

const Clear = () => {
  return (
    <div className={s.clear}>
      <Link href={"/catalog/"}>Сбросить фильтры</Link>
    </div>
  );
};

export default Clear;
