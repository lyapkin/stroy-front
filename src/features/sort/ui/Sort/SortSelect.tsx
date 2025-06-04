"use client";
import s from "./styles.module.css";
import useToggle from "./hooks/useToggle";
import useSelectChange from "./hooks/useSelectChange";
import ArrowFilledIcon from "@/src/shared/ui/icons/ArrowFilledIcon";
import useIsInteractive from "@/src/shared/hooks/useIsInteractive";

const SortSelect = () => {
  const isInterctive = useIsInteractive();
  const { open, setOpen, outsideClickCloseRef } = useToggle();
  const { currentValue, handleChange, options } = useSelectChange(() => {
    setOpen(false);
  });

  return (
    <>
      <button
        className={s.sort__button}
        disabled={!isInterctive}
        onClick={() => setOpen(!open)}
      >
        <span className={s.sort__currentCalue}>{currentValue}</span>
        <span
          className={`${s.sort__buttonIcon} ${open && s.sort__buttonIcon_open}`}
        >
          <ArrowFilledIcon />
        </span>
      </button>
      <div ref={outsideClickCloseRef}>
        <ul className={`${s.sort__options} ${open && s.sort__options_open}`}>
          {Object.entries(options).map(([key, value]) => {
            return (
              <li key={key} className={s.sort__optionsItem}>
                <label>
                  {value}
                  <input
                    onClick={() => handleChange(key)}
                    type="radio"
                    value={value}
                    checked={currentValue === value}
                    readOnly
                  />
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SortSelect;
