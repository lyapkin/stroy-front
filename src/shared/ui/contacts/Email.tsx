import Link from "next/link";
import s from "./styles.module.css";
import MailIcon from "../icons/MailIcon";
import cn from "classnames";

const Email = ({ email, className }: EmailProps) => {
  return (
    <Link href={`mailto:${email}`} className={cn(s.tel, className)}>
      <span className={s.tel__icon}>
        <MailIcon />
      </span>
      <span className={s.tel__text}>{email}</span>
    </Link>
  );
};

interface EmailProps {
  email: string;
  className: string;
}

export default Email;
