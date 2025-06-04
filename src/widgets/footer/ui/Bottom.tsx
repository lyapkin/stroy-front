import Link from "next/link";
import s from "./styles.module.css";

const Bottom = () => {
  return (
    <div className={s.bottomSection}>
      <div className="container">
        <div className={s.bottom}>
          <p className={s.cr}>
            Все права защищены © 2025. при копировании обязательна ссылка на
            сайт Stroy-tech.ru
          </p>
          <div className={s.policy}>
            <Link href={"#"}>Политика конфиденциальности</Link>
            <Link href={"#"}>Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
