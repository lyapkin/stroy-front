"use client";
import { HTMLAttributes, JSX, useState } from "react";
import s from "./style.module.css";
import cn from "classnames";

const Expender = ({
  children,
  header,
  indicator,
  isOpenDefault = false,
  isActive = true,
  className,
  headerClassName,
}: ExpenderProps) => {
  const [open, setOpen] = useState(isOpenDefault);

  return (
    <div
      className={cn(s.expender, className, {
        [s.expender_open]: !isActive || open,
        [s.expender_close]: isActive && !open,
      })}
    >
      {header && (
        <button
          className={cn(s.expender__button, headerClassName)}
          onClick={isActive ? () => setOpen((prev) => !prev) : () => {}}
        >
          {header}
          {indicator && isActive && (
            <span className={s.expender__indicator}>{indicator}</span>
          )}
        </button>
      )}
      <div className={cn(s.expender__body)}>{children}</div>
    </div>
  );
};

export interface ExpenderProps extends HTMLAttributes<HTMLElement> {
  header?: JSX.Element;
  indicator?: JSX.Element;
  isOpenDefault?: boolean;
  isActive?: boolean;
  headerClassName?: string;
}

export default Expender;
