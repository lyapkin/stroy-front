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
    digit: "15 000 м2",
    sub: "Площадь цеха металоконструкций",
    text: 'Lorem Ipsum - это текст- "рыба", часто используемый в печати и вэб-дизайне Lorem Ipsum - это текст- "рыба", часто используемый в печати',
  },
  {
    digit: "300",
    sub: "Тонн в месяц",
    text: 'Lorem Ipsum - это текст- "рыба", часто используемый в печати и вэб-дизайне Lorem Ipsum - это текст- "рыба", часто используемый в печати',
  },
  {
    digit: "100",
    sub: "Постоянных партнеров",
    text: 'Lorem Ipsum - это текст- "рыба", часто используемый в печати и вэб-дизайне Lorem Ipsum - это текст- "рыба", часто используемый в печати',
  },
  {
    digit: "14",
    sub: "Производственных линий",
    text: 'Lorem Ipsum - это текст- "рыба", часто используемый в печати и вэб-дизайне Lorem Ipsum - это текст- "рыба", часто используемый в печати',
  },
];

export default AboutDigits;
