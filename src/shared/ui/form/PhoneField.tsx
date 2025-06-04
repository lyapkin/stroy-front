"use client";
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import InputField from "./InputField";
import { formatPhoneNumber } from "../../utils";

const PhoneField = ({
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  const { onChange, className, ...attrs } = rest;
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const dirtyValue = input.value;

    setValue(formatPhoneNumber(dirtyValue));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputField
      type="tel"
      onChange={handleChange}
      value={value}
      className={className}
      {...attrs}
    />
  );
};

export default PhoneField;
