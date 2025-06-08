import { Address } from "@/src/entities/contacts/model/types";
import ContactBulletHeader from "./ContactBulletHeader";
import s from "./styles.module.css";
import { JSX } from "react";
import ContactBulletBody from "./ContactBulletBody";

const MobileContactBullets = ({
  contacts,
  active,
  onClick,
}: MobileContactBulletsProps) => {
  const header: JSX.Element[] = [];
  const body: JSX.Element[] = [];

  contacts.forEach((item) => {
    header.push(
      <ContactBulletHeader
        key={item.id}
        city={item.city}
        onClick={() => onClick(item.id)}
        active={item.id === active}
      />
    );

    body.push(
      <ContactBulletBody
        key={item.id}
        contact={item}
        active={item.id === active}
      />
    );
  });
  return (
    <>
      <div className={s.mobileContact__header}>{header}</div>
      <div className={s.mobileContact__body}>{body}</div>
    </>
  );
};

interface MobileContactBulletsProps {
  contacts: Address[];
  active: number;
  onClick: (id: number) => void;
}

export default MobileContactBullets;
