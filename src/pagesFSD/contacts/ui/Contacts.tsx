import { FormSection } from "@/src/widgets/form";
import RequisitesBlock from "./RequisitesBlock";
import s from "./styles.module.css";
import cn from "classnames";
import ContactBlock from "./ContactBlock";
import { getContactsApi, getRequisitesApi } from "@/src/entities/contacts/api";

const Contacts = async () => {
  const [requisites, contacts] = await Promise.all([
    getRequisitesApi(),
    getContactsApi(),
  ]);
  return (
    <>
      <div className="page hero">
        <div className="container">
          <main>
            <div className={s.contacts}>
              <h1 className={cn(s.contacts__title, "page-title")}>Контакты</h1>
              <div className={s.contacts__list}>
                {contacts.addresses.map((item) => {
                  return <ContactBlock key={item.id} contact={item} />;
                })}
              </div>
              <RequisitesBlock requisites={requisites} />
            </div>
          </main>
        </div>
      </div>
      <FormSection />
    </>
  );
};

export default Contacts;
