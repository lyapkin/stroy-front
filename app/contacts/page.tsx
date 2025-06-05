import Contacts from "@/src/pagesFSD/contacts/ui/Contacts";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "@/src/widgets/breadcrumbs/BreadcrumbsItem";

const ContactsPage = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem>Контакты</BreadcrumbsItem>
      </Breadcrumbs>
      <Contacts />
    </>
  );
};

export default ContactsPage;
