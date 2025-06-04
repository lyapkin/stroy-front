import Link from "next/link";
import { formatPhoneNumber } from "../../utils";
import s from "./styles.module.css";
import PhoneIcon from "../icons/PhoneIcon";
import cn from "classnames";

const PhoneNumber = ({ number, className }: PhoneNumberProps) => {
  return (
    <Link href={`tel:${number}`} className={cn(s.tel, className)}>
      <span className={s.tel__icon}>
        <PhoneIcon />
      </span>
      <span className={s.tel__text}>{formatPhoneNumber(number)}</span>
    </Link>
  );
};

interface PhoneNumberProps {
  number: string;
  className?: string;
}

export default PhoneNumber;
