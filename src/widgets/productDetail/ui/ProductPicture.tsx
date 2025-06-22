"use client";
import s from "./styles.module.css";
import Popup from "@/src/shared/popup/Popup";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const ProductPicture = ({ url, alt }: { url: string; alt: string }) => {
  const [isPictureShown, setIsPictureShown] = useState(false);
  return (
    <AnimatePresence>
      {isPictureShown && (
        <Popup
          close={() => setIsPictureShown(false)}
          key={"popup-product-picture"}
        >
          <motion.div
            className={s.current__popup}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            variants={{
              hidden: { opacity: 0, scale: 0.75 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.1 }}
          >
            <Image src={url} fill alt={alt} objectFit="contain" />
          </motion.div>
        </Popup>
      )}
      <div className={s.current__image} onClick={() => setIsPictureShown(true)}>
        <Image src={url} fill alt={alt} objectFit="cover" />
      </div>
    </AnimatePresence>
  );
};

export default ProductPicture;
