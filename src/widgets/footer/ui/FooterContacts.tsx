import { getContactsApi } from "@/src/entities/contacts/api";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";

const FooterContacts = async () => {
  const contacts = await getContactsApi();

  return (
    <div className={s.footer__contacts}>
      <p className={s.footer__title}>Контакты</p>
      <List
        className={s.footer__telList}
        data={contacts.phones}
        render={(item) => (
          <div className={s.footer__telItem}>
            <span className={s.telItem__text}>{item.caption}</span>
            <PhoneNumber number={item.value} className={s.footer__number} />
          </div>
        )}
      />
    </div>
  );
};

export default FooterContacts;
