import { useEffect, useState } from "react";
import s from "./styles.module.css";

const Counter = ({ value, increment, decrement, setValue }: CounterProps) => {
  const [count, setCount] = useState(value);

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);

    if (!isNaN(val) && val >= 0) {
      setCount(val);
    }
  };

  const handleBlur = () => {
    if (count && count > 0) {
      setValue(count);
    } else {
      setCount(value);
    }
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return (
    <div className={s.counter}>
      <span className={s.counter__minus}>
        <button onClick={decrement} disabled={!value}>
          -
        </button>
      </span>
      <input
        className={s.counter__count}
        value={count !== undefined ? count : "..."}
        disabled={value === undefined}
        onChange={handleChnage}
        onBlur={handleBlur}
      />
      <span className={s.counter__plus}>
        <button onClick={increment} disabled={!value}>
          +
        </button>
      </span>
    </div>
  );
};

interface CounterProps {
  value?: number;
  increment: () => void;
  decrement: () => void;
  setValue: (count: number) => void;
}

export default Counter;
