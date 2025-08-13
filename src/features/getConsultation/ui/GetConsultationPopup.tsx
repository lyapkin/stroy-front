"use client";
import Popup from "@/src/shared/popup/Popup";
import { AnimatePresence, motion } from "motion/react";
import s from "./styles.module.css";
import { useState } from "react";
import GetConsultation from "./GetConsultation";

const GetConsultationPopup = ({
  className,
  caption,
  target,
}: GetConsultationPopupProps) => {
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <AnimatePresence>
      {isFormShown && (
        <Popup close={() => setIsFormShown(false)} key={"popup-form"}>
          <motion.div
            className={s.popupForm}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            <p className={s.popupForm__title}>
              Вам нужен надежный поставщик комплектующих для вашего объекта?
            </p>
            <p className={s.popupForm__subtitle}>
              Оставьте ваши контактные данные и наш специалист свяжется с вами в
              течение 15 минут
            </p>
            <GetConsultation target={target} />
          </motion.div>
        </Popup>
      )}
      <button className={className} onClick={() => setIsFormShown(true)}>
        {caption}
      </button>
    </AnimatePresence>
  );
};

interface GetConsultationPopupProps {
  className: string;
  caption: string;
  target?: string;
}

export default GetConsultationPopup;
