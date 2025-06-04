import s from "./styles.module.css";
import SelectedSquareIcon from "./icons/SelectedSquareIcon";
import SquareIcon from "./icons/SquareIcon";
import cn from "classnames";

const ProductQualityDot = ({
  name,
  text,
  active,
  onClick,
}: {
  name: string;
  text: string;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(s.dots__item, {
        [s.dots__item_active]: active,
      })}
    >
      <div className={s.dots__point} onClick={onClick}>
        {active ? <SelectedSquareIcon /> : <SquareIcon />}
      </div>
      <div className={s.dots__content}>
        <p className={s.dots__title} onClick={onClick}>
          {name}
        </p>
        <p className={s.dots__text}>{text}</p>
      </div>
    </div>
  );
};

export default ProductQualityDot;
