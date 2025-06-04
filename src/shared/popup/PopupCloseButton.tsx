import CloseIcon from "../ui/icons/CloseIcon";
import s from "./styles.module.css";
import { PopupCloseProps } from "./types";

const PopupCloseButton = ({ close }: PopupCloseProps) => {
  return (
    <button className={s.popup__close} onClick={close}>
      <CloseIcon />
    </button>
  );
};

export default PopupCloseButton;
