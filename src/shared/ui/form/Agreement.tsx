import Link from "next/link";
import s from "./styles.module.css";

const Agreement = () => {
  return (
    <p className={s.agreement}>
      Отправляя свои данные Вы подтверждаете, что ознакомились с{" "}
      <Link href="/agreement/" target="_blank">
        пользовательским соглашением
      </Link>{" "}
      и{" "}
      <Link href="/privacy/" target="_blank">
        политикой кофиденциальности
      </Link>
      , а также согласны с данными условиями.
    </p>
  );
};

export default Agreement;
