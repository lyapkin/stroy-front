import { Address } from "@/src/entities/contacts/model/types";
import s from "./styles.module.css";
import cn from "classnames";
import ContactBulletHeader from "./ContactBulletHeader";
import ContactBulletBody from "./ContactBulletBody";

const ContactBullet = ({ contact, active, onClick }: ContactBulletProps) => {
  return (
    <div className={cn(s.contact, { [s.contact_active]: active })}>
      <ContactBulletHeader city={contact.city} onClick={onClick} />

      <ContactBulletBody contact={contact} onClick={onClick} />
    </div>
  );
};

interface ContactBulletProps {
  contact: Address;
  active: boolean;
  onClick: () => void;
}

export default ContactBullet;
