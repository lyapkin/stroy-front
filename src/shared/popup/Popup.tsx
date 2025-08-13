"use client";
import React, { useEffect, useRef } from "react";
import s from "./styles.module.css";
import PopupCloseButton from "./PopupCloseButton";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { PopupProps } from "./types";

const Popup = ({ children, close }: PopupProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        e.target instanceof Node &&
        !ref.current?.children[0].contains(e.target)
      ) {
        close();
      }
    };

    document.documentElement.style.overflowY = "hidden";

    document.addEventListener("click", handler);

    return () => {
      document.documentElement.style.overflowY = "";
      document.removeEventListener("click", handler);
    };
  }, [close]);

  return createPortal(
    <motion.div
      className={s.popup}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
        visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
      transition={{ duration: 0.2 }}
    >
      <div className={s.popup__content} ref={ref}>
        {children}
      </div>
      {/* {isCloseButtonDisplayed &&  */}
      <PopupCloseButton close={close} />
      {/* } */}
    </motion.div>,
    document.body
  );
};

export default Popup;
