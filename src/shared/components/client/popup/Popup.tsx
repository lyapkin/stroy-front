"use client";
import React, { PropsWithChildren } from "react";
import s from "./styles.module.css";
import PopupCloseButton from "./PopupCloseButton";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";

const Popup = ({ open, close, children }: PopupProps) => {
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key={"popup"}
          className={s.popup}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
            visible: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
          transition={{ duration: 0.2 }}
          onClick={close}
        >
          <motion.div
            className={s.popup__container}
            onClick={(e) => e.stopPropagation()}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            {children}
          </motion.div>
          <PopupCloseButton close={close} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

interface PopupProps extends PropsWithChildren {
  open: boolean;
  close: () => void;
}

export default Popup;
