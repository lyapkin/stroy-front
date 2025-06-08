import s from "./styles.module.css";
import cn from "classnames";

const ContactBulletHeader = ({
  city,
  onClick,
  active,
}: ContactBulletHeaderProps) => {
  return (
    <p
      className={cn(s.contact__city, { [s.contact__city_active]: active })}
      onClick={onClick}
    >
      г. {city}
    </p>
  );
};

interface ContactBulletHeaderProps {
  city: string;
  onClick: () => void;
  active?: boolean;
}

export default ContactBulletHeader;
