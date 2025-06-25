import Nav from "@/src/shared/ui/Nav/Nav";
import s from "./styles.module.css";
import NavItem from "@/src/shared/ui/Nav/NavItem";
import Logo from "@/src/shared/ui/Logo/Logo";
import { SearchBar } from "@/src/features/search";
import TelegramLink from "@/src/shared/ui/socialLinks/TelegramLink";
import WhatsappLink from "@/src/shared/ui/socialLinks/WhatsappLink";
import { CartLink } from "@/src/entities/cart";
import Catalog from "./Catalog";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";
import Email from "@/src/shared/ui/contacts/Email";
import { Suspense } from "react";
import { getContactsApi } from "@/src/entities/contacts/api";
import MobileMenu from "./MobileMenu";
import BlurTheme from "@/src/shared/ui/blurTheme/BlurTheme";

const Header = async () => {
  const contacts = await getContactsApi();
  return (
    <header className={s.headerSection}>
      <div className="container">
        <BlurTheme className={s.blur}>
          <div className={s.header}>
            <MobileMenu className={s.header__mobile} contacts={contacts} />
            <div className={s.header__mobileLogo}>
              <Logo />
            </div>
            <div className={s.header__nav}>
              <Nav className={s.header__navList}>
                <li className={s.header__catalog}>
                  <Catalog />
                </li>
                <NavItem link={"/about/"} className={s.header__navItem}>
                  О компании
                </NavItem>
                <NavItem link={"/partners/"} className={s.header__navItem}>
                  Партнерам
                </NavItem>
                <li className={s.header__logo}>
                  <Logo />
                </li>
                <NavItem link={"/blog/"} className={s.header__navItem}>
                  Новости
                </NavItem>
                <NavItem link={"/faq/"} className={s.header__navItem}>
                  FAQ
                </NavItem>
                <NavItem link={"/contacts/"} className={s.header__navItem}>
                  Контакты
                </NavItem>
              </Nav>
            </div>
            <Suspense>
              <SearchBar className={s.header__search} pathPrefix="/catalog/" />
            </Suspense>
            <div className={s.header__social}>
              <TelegramLink link={contacts.tg} />
              <WhatsappLink link={contacts.wa} />
            </div>
            <Email email={contacts.email} className={s.header__email} />
            <PhoneNumber number={contacts.phone} className={s.header__tel} />
            <div className={s.header__cart}>
              <CartLink />
            </div>
          </div>
        </BlurTheme>
      </div>
    </header>
  );
};

export default Header;
