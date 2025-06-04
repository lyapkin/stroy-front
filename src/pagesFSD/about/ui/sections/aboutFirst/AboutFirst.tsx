import s from "../../styles.module.css";
import cn from "classnames";

const AboutFirst = () => {
  return (
    <section className={cn(s.aboutFirstSection, "section")}>
      <div className="container">
        <div className={s.aboutFirst}>
          <h2 className={cn(s.aboutFirst__title, "section-title")}>
            <b>Строительные технологии </b>- это качество и надежность
          </h2>
          <p className={s.aboutFirst__text}>
            В 2023 г. на АО «ОМЗ» в дополнение к выпуску высокопрочных стяжных
            винтов для опалубки запущен в эксплуатацию новый современный цех
            по производству опалубки и комплектующих для нее. Цех имеет площадь
            6000 кв.м., оснащен новым специализированным технологическим
            оборудованием, включая профиленакатную линию, сварочные роботы,
            линии порошковой окраски и другие, позволяющие производить
            до 800 тн. опалубочных конструкций в месяц. С выпускаемой
            продукцией Вы можете ознакомиться здесь.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutFirst;
