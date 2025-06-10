import { Address } from "@/src/entities/contacts/model/types";
import s from "./styles.module.css";
import FlagIcon from "@/src/shared/ui/icons/FlagIcon";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";

const ContactBlock = ({ contact }: ContactBlockProps) => {
  return (
    <div className={s.contact}>
      <p className={s.contact__city}>г. {contact.city}</p>
      <div className={s.contact__block}>
        <div className={s.block__location}>
          <span className={s.location__icon}>
            <FlagIcon />
          </span>
          <span className={s.location__caption}>{contact.caption}</span>
          <span className={s.location__address}>{contact.address}</span>
        </div>
        <div className={s.block__schedule}>
          <span className={s.schedule__title}>Время работы</span>
          <div className={s.schedule__hours}>
            <span className={s.schedule__weekday}>
              Пн-Пт, {contact.weekdays}
            </span>
            <span className={s.schedule__weekend}>
              Сб-Вс, {contact.weekends}
            </span>
          </div>
        </div>
        {contact.phone && (
          <div className={s.block__phone}>
            <span className={s.phone__title}>Телефон</span>
            {/* {contact.phones.map((item) => {
            return (
              <PhoneNumber
                key={item.id}
                number={item.tel}
                className={s.phone__tel}
              />
            );
          })} */}
            <PhoneNumber number={contact.phone} className={s.phone__tel} />
          </div>
        )}
      </div>
    </div>
  );
};

interface ContactBlockProps {
  contact: Address;
}

export default ContactBlock;
