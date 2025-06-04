import s from "../../styles.module.css";
import { JSX } from "react";

const Item = ({ data }: BulletsItemProps) => {
  return (
    <div className={s.item}>
      <div className={s.item__icon}>{data.icon}</div>
      <div className={s.item__title}>{data.title}</div>
      <div className={s.item__text}>{data.text}</div>
    </div>
  );
};

export interface BulletsItemProps {
  data: {
    id: number;
    title: string;
    text: string;
    icon: JSX.Element;
  };
}

export default Item;
