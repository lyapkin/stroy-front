import { getContactsApi } from "@/src/entities/contacts/api";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";
import TelegramLink from "@/src/shared/ui/socialLinks/TelegramLink";
import WhatsappLink from "@/src/shared/ui/socialLinks/WhatsappLink";

const FooterContacts = async () => {
  const contacts = await getContactsApi();

  return (
    <>
      <div className={s.footer__contacts}>
        <p className={s.footer__title}>Контакты</p>
        <PhoneNumber number={contacts.phone} className={s.footer__mainNumber} />
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
      <div className={s.footer__social}>
        <div className={s.footer__socialList}>
          <TelegramLink link={contacts.tg} />
          <WhatsappLink link={contacts.wa} />
          {/* <VkLink /> */}
        </div>
      </div>
    </>
  );
};

export default FooterContacts;
