import s from "../../styles.module.css";
import Item from "./Item";
// import TeamIcon from "./icons/TeamIcon";
// import ShieldIcon from "./icons/ShieldIcon";
// import HandshakeIcon from "./icons/HandshakeIcon";
// import MountainsIcon from "./icons/MountainsIcon";

const Bullets = () => {
  const content = data.map((item) => {
    return <Item key={item.id} data={item} />;
  });
  return <div className={s.bullets}>{content}</div>;
};

const data = [
  {
    id: 1,
    title: "Профессиональное консультарование",
    text: "Мы предоставляем консультации по выбору опалубочных систем, а также услуги по проектированию и расчету необходимых материалов",
    // icon: <TeamIcon />,
    icon: null,
  },
  {
    id: 2,
    title: "Вся опалубка в наличии",
    text: "У нас на складах имеется более продукции, постоянно обновляемый складской остаток",
    // icon: <ShieldIcon />,
    icon: null,
  },
  {
    id: 3,
    title: "Доставка по России",
    text: "Осуществляем доставку по всем регионам РФ и странам СНГ. Благодаря собственному автопарку предоставляем выгодные условия.",
    // icon: <HandshakeIcon />,
    icon: null,
  },
  {
    id: 4,
    title: "Удобные варианты приобретения",
    text: "Подбираем наиболее выгодное решение для каждого клиента",
    // icon: <MountainsIcon />,
    icon: null,
  },
];

export default Bullets;
