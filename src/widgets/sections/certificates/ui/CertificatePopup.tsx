import Popup from "@/src/shared/popup/Popup";
import { AnimatePresence, motion } from "motion/react";
import { JSX, useState } from "react";
import s from "./styles.module.css";

const CertificatePopup = ({ certificate }: CertificatePopupProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <AnimatePresence>
      {isShown && (
        <Popup close={() => setIsShown(false)} key={"popup-"}>
          <motion.div
            className={s.certificatePopup}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            {certificate}
          </motion.div>
        </Popup>
      )}
      <div
        className={s.certificatesContent__picture}
        onClick={() => setIsShown(true)}
      >
        {certificate}
      </div>
    </AnimatePresence>
  );
};

interface CertificatePopupProps {
  certificate: JSX.Element;
}

export default CertificatePopup;
