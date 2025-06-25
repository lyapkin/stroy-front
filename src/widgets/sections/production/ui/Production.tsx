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
    text: "Собственный цех строительных конструкций в Пермском крае",
    image: "/images/home/production/1.webp",
  },
  {
    title: "14 производственных линий",
    text: "На территории нашего предприятия располагается 14 линий для эффективной производительности выпускаемой продукции",
    image: "/images/home/production/2.webp",
  },
  {
    title: "300 тонн в месяц",
    text: "Производственные мощности нашего предприятия позволяют выпускать более 300 тон металлопродукции в месяц",
    image: "/images/home/production/3.webp",
  },
  {
    title: "Цех оснащен высоко-технологичным оборудованием",
    text: "Профиленакатные линии, сварочные роботы, линии порошковой окраски и др. ",
    image: "/images/home/production/4.webp",
  },
];

export default Production;
