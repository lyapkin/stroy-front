import CloseIcon from "@/src/shared/ui/icons/CloseIcon";
import s from "./styles.module.css";

const PopupCloseButton = ({ close }: PopupCloseProps) => {
  return (
    <button className={s.popup__close} onClick={close}>
      <CloseIcon />
    </button>
  );
};

interface PopupCloseProps {
  close: () => void;
}

export default PopupCloseButton;
