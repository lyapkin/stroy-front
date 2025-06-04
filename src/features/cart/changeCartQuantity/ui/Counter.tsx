import s from "./styles.module.css";

const Counter = ({ value, increment, decrement }: CounterProps) => {
  return (
    <div className={s.counter}>
      <span className={s.counter__minus}>
        <button onClick={decrement} disabled={!value}>
          -
        </button>
      </span>
      <span className={s.counter__count}>{value ? value : "..."}</span>
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
}

export default Counter;
