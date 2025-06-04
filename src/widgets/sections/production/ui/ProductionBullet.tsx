"use client";
import { useEffect, useRef } from "react";
import s from "./styles.module.css";
import { useAnimation, useInView, motion } from "motion/react";

const ProductionBullet = ({
  index,
  title,
  text,
  image,
}: ProductionBulletProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  const bg = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return (
    <motion.div
      className={s.productionBullet}
      style={bg}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className={s.productionBullet__title}>{title}</h3>
      <p className={s.productionBullet__text}>{text}</p>
    </motion.div>
  );
};

interface ProductionBulletProps {
  index: number;
  title: string;
  text: string;
  image: string;
}

export default ProductionBullet;
