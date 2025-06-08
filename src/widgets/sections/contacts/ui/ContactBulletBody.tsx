import { Address } from "@/src/entities/contacts/model/types";
import s from "./styles.module.css";
import FlagIcon from "@/src/shared/ui/icons/FlagIcon";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";
import cn from "classnames";

const ContactBulletBody = ({
  contact,
  onClick,
  active,
}: ContactBulletBodyProps) => {
  return (
    <div className={cn(s.contact__body, { [s.contact__body_active]: active })}>
      <div className={s.contact__location} onClick={onClick}>
        <span className={s.location__icon}>
          <FlagIcon />
        </span>
        <span className={s.location__caption}>{contact.caption}</span>
        <span className={s.location__address}>{contact.address}</span>
      </div>
      <div className={s.contact__schedule}>
        <div className={s.schedule__hours}>
          <span className={s.schedule__weekday}>Пн-Пт, {contact.weekdays}</span>
          <span className={s.schedule__weekend}>Сб-Вс, {contact.weekends}</span>
        </div>
      </div>
      <PhoneNumber number={contact.phone} className={s.contact__phone} />
    </div>
  );
};

interface ContactBulletBodyProps {
  contact: Address;
  onClick?: () => void;
  active?: boolean;
}

export default ContactBulletBody;
