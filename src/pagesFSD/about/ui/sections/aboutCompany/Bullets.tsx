import s from "../../styles.module.css";
import Item from "./Item";
import TeamIcon from "./icons/TeamIcon";
import ShieldIcon from "./icons/ShieldIcon";
import HandshakeIcon from "./icons/HandshakeIcon";
import MountainsIcon from "./icons/MountainsIcon";

const Bullets = () => {
  const content = data.map((item) => {
    return <Item key={item.id} data={item} />;
  });
  return <div className={s.bullets}>{content}</div>;
};

const data = [
  {
    id: 1,
    title: "Команда",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"',
    icon: <TeamIcon />,
  },
  {
    id: 2,
    title: "Гарантии",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"',
    icon: <ShieldIcon />,
  },
  {
    id: 3,
    title: "Поддержка",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"',
    icon: <HandshakeIcon />,
  },
  {
    id: 4,
    title: "Задачи",
    text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"',
    icon: <MountainsIcon />,
  },
];

export default Bullets;
