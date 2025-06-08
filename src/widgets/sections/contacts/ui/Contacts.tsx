import Content from "./Content";
import s from "./styles.module.css";
import { getContactsApi } from "@/src/entities/contacts/api";

const Contacts = async () => {
  const contacts = await getContactsApi();
  return (
    <section className={s.contactsSection}>
      <Content contacts={contacts.addresses} />
    </section>
  );
};

export default Contacts;
