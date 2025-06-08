"use client";
import { Address } from "@/src/entities/contacts/model/types";
import s from "./styles.module.css";
import cn from "classnames";
import ContactBullet from "./ContactBullet";
import dynamic from "next/dynamic";
import { useState } from "react";
import useWindowWidth from "@/src/shared/hooks/useWindowWidth";
import MobileContactBullets from "./MobileContactBullets";

const Map = dynamic(() => import("./Map"), { ssr: false });

const Content = ({ contacts }: ContentProps) => {
  const [currentContact, setCurrentContact] = useState<number | null>(null);
  const width = useWindowWidth();

  if (!width) {
    return null;
  }

  if (width > 760) {
    return (
      <>
        <div className={cn(s.bullets, "container")}>
          {contacts.map((item) => {
            return (
              <ContactBullet
                key={item.id}
                contact={item}
                active={currentContact === item.id}
                onClick={() => setCurrentContact(item.id)}
              />
            );
          })}
        </div>
        <Map
          currentContact={currentContact}
          addresses={contacts}
          onClick={setCurrentContact}
        />
      </>
    );
  }

  return (
    <>
      <div className={cn(s.bullets, "container")}>
        {contacts.length > 0 && (
          <MobileContactBullets
            contacts={contacts}
            onClick={setCurrentContact}
            active={currentContact || contacts[0].id}
          />
        )}
      </div>
    </>
  );
};

interface ContentProps {
  contacts: Address[];
}

export default Content;
