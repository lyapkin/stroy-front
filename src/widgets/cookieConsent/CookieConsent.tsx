"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./styles.module.css";
import getCookie from "@/src/shared/utils";
import Button from "@/src/shared/ui/Button/Button";

const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useState(true);

  useEffect(() => {
    const cookie = getCookie(COOKIE_KEY);
    if (cookie === "true") {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
  }, []);

  if (isAccepted) return null;

  const handleAccept = () => {
    document.cookie = `${COOKIE_KEY}=true; path=/; max-age=${
      365 * 24 * 60 * 60
    };`;
    setIsAccepted(true);
  };

  return (
    <div className={s.cookieConsent}>
      <p className={s.cookieConsent__text}>
        На нашем сайте используются cookie–файлы, в том числе сервисов
        веб–аналитики. Используя сайт, вы соглашаетесь на обработку персональных
        данных при помощи cookie–файлов. Подробнее об обработке персональных
        данных вы можете узнать в{" "}
        <Link href={"/privacy/"} target="_blank">
          Политике конфиденциальности
        </Link>
        .
      </p>
      <Button onClick={handleAccept}>Принять</Button>
    </div>
  );
};

const COOKIE_KEY = "cookie_policy";

export default CookieConsent;
