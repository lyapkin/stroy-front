import TrashBinIcon from "@/src/shared/ui/icons/TrashBinIcon";
import s from "./styles.module.css";

const Clear = ({ remove }: ClearProps) => {
  return (
    <button onClick={remove} className={s.clear}>
      <span className={s.clear__text}>Очистить</span>
      <span className={s.clear__icon}>
        <TrashBinIcon />
      </span>
    </button>
  );
};

interface ClearProps {
  remove: () => void;
}

export default Clear;
