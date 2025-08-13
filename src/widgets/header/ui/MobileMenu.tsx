"use client";
import BurgerIcon from "@/src/shared/ui/icons/BurgerIcon";
import s from "./styles.module.css";
import { HTMLAttributes, MouseEvent, useState } from "react";
import cn from "classnames";
import CloseIcon from "@/src/shared/ui/icons/CloseIcon";
import { Contact } from "@/src/entities/contacts/model/types";
import Email from "@/src/shared/ui/contacts/Email";
import PhoneNumber from "@/src/shared/ui/contacts/PhoneNumber";
import Nav from "@/src/shared/ui/Nav/Nav";
import NavItem from "@/src/shared/ui/Nav/NavItem";
import TelegramLink from "@/src/shared/ui/socialLinks/TelegramLink";
import WhatsappLink from "@/src/shared/ui/socialLinks/WhatsappLink";
import useCloseByClickOutside from "@/src/shared/utils/client/useCloseByClickOutside";
import { CartLink } from "@/src/entities/cart";

const MobileMenu = ({ className, contacts }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useCloseByClickOutside(() => setIsOpen(false));

  const handleLinkClick = (e: MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof Element &&
      (e.target.nodeName === "A" || e.target.closest("a"))
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={cn(s.mobileMenu, className, {
        [s.mobileMenu_open]: isOpen,
        [s.mobileMenu_closed]: !isOpen,
      })}
      ref={ref}
    >
      <button
        className={s.mobileMenu__button}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </button>
      <div
        className={cn(s.mobileMenuWrapper, {
          [s.mobileMenuWrapper_open]: isOpen,
          [s.mobileMenuWrapper_closed]: !isOpen,
        })}
      >
        <div className={s.mobileMenuContent} onClick={handleLinkClick}>
          <Nav className={s.mobileMenu__navList}>
            <NavItem link={"/faq/"} className={s.mobileMenu__navItem}>
              FAQ
            </NavItem>
            <NavItem link={"/about/"} className={s.mobileMenu__navItem}>
              О компании
            </NavItem>
            <NavItem link={"/partners/"} className={s.mobileMenu__navItem}>
              Партнерам
            </NavItem>
            <NavItem link={"/blog/"} className={s.mobileMenu__navItem}>
              Новости
            </NavItem>
            <NavItem link={"/contacts/"} className={s.mobileMenu__navItem}>
              Контакты
            </NavItem>
          </Nav>
          <div className={s.mobileMenu__social}>
            <TelegramLink />
            <WhatsappLink />
          </div>
          <Email email={contacts.email} className={s.mobileMenu__email} />
          <PhoneNumber number={contacts.phone} className={s.mobileMenu__tel} />
          {contacts.phone2 && (
            <PhoneNumber
              number={contacts.phone2}
              className={s.mobileMenu__tel}
            />
          )}
          <div className={s.mobileMenu__cart}>
            <CartLink />
          </div>
        </div>
      </div>
    </div>
  );
};

interface MobileMenuProps extends HTMLAttributes<HTMLElement> {
  contacts: Contact;
}

export default MobileMenu;
