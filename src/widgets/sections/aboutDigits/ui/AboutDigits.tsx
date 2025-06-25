import s from "./styles.module.css";
import cn from "classnames";
import AboutBullet from "./AboutBullet";

const AboutDigits = () => {
  return (
    <section className={cn(s.aboutSection, "section")}>
      <div className="container">
        <div className={cn(s.about, "section-flex")}>
          <h2 className={cn(s.about__title, "section-title")}>
            Компания «Строительные Технологии» -{" "}
            <b>ведущий поставщик В РФ и СНГ строительных лесов и опалубки</b>
          </h2>
          <div className={s.about__bullets}>
            {data.map((item, i) => {
              return (
                <AboutBullet
                  key={i}
                  digit={item.digit}
                  sub={item.sub}
                  text={item.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const data = [
  {
    digit: "6 000 м<sup>2</sup>",
    sub: "площадь производства",
    text: "Площадь наших производственных помещений составляет 6 000 м<sup>2</sup> на которых располагается 14 производственных линий",
  },
  {
    digit: "300",
    sub: "тонн в месяц",
    text: "Производственные мощности нашего предприятия позволяют выпускать более 300 тонн металлопродукции в месяц",
  },
  {
    digit: "100+",
    sub: "постоянных партнеров",
    text: "Нам доверяют ведущие строительные компании комплектацию своих объектов",
  },
  {
    digit: "14",
    sub: "производственных линий",
    text: "На территории нашего предприятия располагается 14 линий для эффективной производительности выпускаемой продукции",
  },
];

export default AboutDigits;
