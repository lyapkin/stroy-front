import s from "./styles.module.css";
import ProductionBullet from "./ProductionBullet";
import cn from "classnames";

const Production = () => {
  return (
    <section className={cn(s.productionSection, "section")}>
      <div className="container">
        <div className={cn(s.production, "section-flex")}>
          <h2 className={cn(s.production__title, "section-title")}>
            <b>Строительные технологии </b>- это качество и надежность
          </h2>
          <div className={s.production__bullets}>
            {data.map((item, i) => {
              return (
                <ProductionBullet
                  key={i}
                  index={i + 2}
                  title={item.title}
                  text={item.text}
                  image={item.image}
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
    title: "Собственное производство",
    text: "Собственный цех строительных конструкций на територии завода ОМЗ в Перми.",
    image: "/images/home/production/1.webp",
  },
  {
    title: "14 производственных линий",
    text: "Цех имеет площадь 6000 кв.м., оснащен новым специализированным технологическим оборудованием, включая профиленакатную линию",
    image: "/images/home/production/2.webp",
  },
  {
    title: "30 тонн в месяц",
    text: "Производственная мощность цеха строительных конструкций позволяет производить более 30 тон металоизделий в месяц",
    image: "/images/home/production/3.webp",
  },
  {
    title: "Собственный цех Цех строительных",
    text: "",
    image: "/images/home/production/4.webp",
  },
];

export default Production;
