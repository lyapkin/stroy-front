import s from "./styles.module.css";

const AboutBullet = ({ digit, sub, text }: AboutBulletProps) => {
  return (
    <div className={s.aboutBullet}>
      <h3 className={s.aboutBullet__title}>
        <span className={s.aboutBullet__digit}>{digit}</span>
        {sub}
      </h3>
      <p className={s.aboutBullet__text}>{text}</p>
    </div>
  );
};

interface AboutBulletProps {
  digit: string;
  sub: string;
  text: string;
}

export default AboutBullet;
