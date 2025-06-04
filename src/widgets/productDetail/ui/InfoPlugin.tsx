import Image from "next/image";
import s from "./styles.module.css";
import { JSX } from "react";

const InfoPlugin = ({ image, title, text, action }: InfoPluginProps) => {
  return (
    <div className={s.plugin}>
      <div className={s.plugin__image}>
        <Image
          src={image}
          fill
          alt=""
          style={{ objectFit: "contain", objectPosition: "top 0 right 16px" }}
        />
      </div>
      <p className={s.plugin__title}>{title}</p>
      <p className={s.plugin__text}>{text}</p>
      <div className={s.plugin__action}>{action}</div>
    </div>
  );
};

interface InfoPluginProps {
  image: string;
  title: string;
  text: string;
  action?: JSX.Element;
}

export default InfoPlugin;
