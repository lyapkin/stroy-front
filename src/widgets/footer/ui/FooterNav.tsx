import Nav from "@/src/shared/ui/Nav/Nav";
import s from "./styles.module.css";
import NavItem from "@/src/shared/ui/Nav/NavItem";
import FooterList from "./FooterList";

const FooterNav = () => {
  return (
    <div className={s.footer__nav}>
      <FooterList title="Карта сайта">
        <Nav className={s.footer__list}>
          <NavItem link={"/catalog/"} className={s.footer__listItem}>
            Каталог
          </NavItem>
          <NavItem link={"/about/"} className={s.footer__listItem}>
            О компании
          </NavItem>
          <NavItem link={"/partners/"} className={s.footer__listItem}>
            Партнерам
          </NavItem>
          <NavItem link={"/blog/"} className={s.footer__listItem}>
            Новости
          </NavItem>
          <NavItem link={"/contacts/"} className={s.footer__listItem}>
            Контакты
          </NavItem>
          <NavItem link={"/faq/"} className={s.footer__listItem}>
            FAQ
          </NavItem>
        </Nav>
      </FooterList>
    </div>
  );
};

export default FooterNav;
