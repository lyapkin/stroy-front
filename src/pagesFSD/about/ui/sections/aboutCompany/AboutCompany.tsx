import s from "../../styles.module.css";
import cn from "classnames";
import Bullets from "./Bullets";

const AboutCompany = () => {
  return (
    <section className={cn(s.aboutCompanySection, "section")}>
      <div className="container">
        <div className={s.aboutCompany}>
          <h2 className={cn(s.aboutCompany__title, "section-title")}>
            Компания «Строительные Технологии» -{" "}
            <b>ведущий поставщик В РФ и СНГ строительных лесов и опалубки</b>
          </h2>
          <div className={s.aboutCompany__mission}>
            <p>
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати. Lorem Ipsum - это текст-рыба, часто используемый в печати
              и вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати. Lorem Ipsum - это текст-рыба, часто используемый в печати
              и вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати.
            </p>
            <p>
              Lorem Ipsum - это текст-рыба, часто используемый в печати и
              вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати. Lorem Ipsum - это текст-рыба, часто используемый в печати
              и вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати. Lorem Ipsum - это текст-рыба, часто используемый в печати
              и вэб-дизайне Lorem Ipsum - это текст-рыба, часто используемый в
              печати.
            </p>
          </div>
          <div className={s.aboutCompany__bullets}>
            <p className={s.bullets__title}>Ценености компании</p>
            <Bullets />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
