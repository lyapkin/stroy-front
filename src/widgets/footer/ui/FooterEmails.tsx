import { getContactsApi } from "@/src/entities/contacts/api";
import s from "./styles.module.css";
import List from "@/src/shared/ui/List/List";
import Email from "@/src/shared/ui/contacts/Email";

const FooterEmails = async () => {
  const contacts = await getContactsApi();

  return (
    <div className={s.footer__emails}>
      <p className={s.footer__title}>Почта</p>
      <List
        className={s.footer__emailList}
        data={contacts.emails}
        render={(item) => (
          <div className={s.footer__emailItem}>
            <Email email={item.value} className={s.footer__number} />
            <span className={s.emailItem__text}>{item.caption}</span>
          </div>
        )}
      />
    </div>
  );
};

export default FooterEmails;
