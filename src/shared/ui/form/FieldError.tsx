import s from "./styles.module.css";

const FieldError = ({ message }: { message: string }) => {
  return <span className={s.error}>{message}</span>;
};

export default FieldError;
