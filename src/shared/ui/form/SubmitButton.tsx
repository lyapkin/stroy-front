import Button from "../Button/Button";
import Spinner from "../loading/spinners/Spinner";
import s from "./styles.module.css";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import Sent from "./Sent";

const SubmitButton = ({
  isSending,
  isSubmited,
  text = "Отправить",
  className,
  ...rest
}: SubmitButtonProps) => {
  if (isSubmited) {
    return (
      <div className={cn(s.submitButton, className)}>
        <Sent />
      </div>
    );
  }
  return (
    <div className={cn(s.submitButton, className)}>
      {isSending && (
        <div className={s.submitButton_loading}>
          <Spinner />
        </div>
      )}
      <Button type={"submit"} disabled={isSending} {...rest}>
        {text}
      </Button>
    </div>
  );
};

export interface SubmitButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isSubmited: boolean;
  isSending: boolean;
  text?: string;
}

export default SubmitButton;
