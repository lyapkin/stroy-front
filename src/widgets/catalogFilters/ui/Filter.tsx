"use client";
import Expender from "@/src/shared/ui/Expender/Expender";
import CheckboxInput from "@/src/shared/ui/form/CheckboxInput";
import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import List from "@/src/shared/ui/List/List";
import s from "./styles.module.css";
import { useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import useChangeSearchParams from "@/src/shared/utils/client/useChangeSearchParams";
import useIsInteractive from "@/src/shared/utils/client/useIsInteractive";

const Filter = ({ data, type, unit, title, multiple = false }: Props) => {
  const searchParams = useSearchParams();
  const current = searchParams.getAll(type);
  const changeSearchParams = useChangeSearchParams();

  const isInteractive = useIsInteractive();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const usp = new URLSearchParams(searchParams);

    if (
      current.length === 0 ||
      (current.length > 0 && !multiple && !current.includes(value))
    ) {
      usp.set(type, value);
    } else if (multiple && current.includes(value)) {
      usp.delete(type);

      const val = current.filter((item) => item != value);
      if (val.length > 0) {
        val.forEach((item) => {
          usp.append(type, item);
        });
      }
    } else if (multiple && !current.includes(value)) {
      usp.append(type, value);
    } else {
      usp.delete(type);
    }

    changeSearchParams(usp, { noPage: true });
  };

  return (
    <Expender
      header={<span className={s.filters__head}>{title}</span>}
      indicator={<ArrowDownIcon />}
      isOpenDefault={false}
      className={s.filters__block}
    >
      <List
        className={s.filters__list}
        data={data}
        render={(item) => (
          <CheckboxInput
            name={type}
            onChange={handleChange}
            label={`${item.name}${unit ? " " + unit : ""}`}
            value={String(item.slug)}
            checked={current.includes(String(item.slug))}
            disabled={!isInteractive}
          />
        )}
      />
    </Expender>
  );
};

interface Props {
  title: string;
  type: string;
  unit?: string;
  multiple?: boolean;
  data: {
    id: number | string;
    name: string;
    slug: number | string | boolean;
  }[];
}

export default Filter;
