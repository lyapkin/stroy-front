import Nav from "@/src/shared/ui/Nav/Nav";
import s from "./styles.module.css";
import NavItem from "@/src/shared/ui/Nav/NavItem";
import FooterList from "./FooterList";

const FooterNav = () => {
  return (
    <div className={s.footer__nav}>
      <FooterList title="Сайт">
        <Nav className={s.footer__list}>
          <NavItem link={"#"} className={s.footer__listItem}>
            Объекты
          </NavItem>
          <NavItem link={"#"} className={s.footer__listItem}>
            О компании
          </NavItem>
          <NavItem link={"#"} className={s.footer__listItem}>
            Партнерам
          </NavItem>
          <NavItem link={"#"} className={s.footer__listItem}>
            Новости
          </NavItem>
          <NavItem link={"#"} className={s.footer__listItem}>
            Контакты
          </NavItem>
        </Nav>
      </FooterList>
    </div>
  );
};

export default FooterNav;
