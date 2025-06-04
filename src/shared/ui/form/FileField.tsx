"use client";
import {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  useState,
} from "react";
import s from "./styles.module.css";
import cn from "classnames";
import ClipIcon from "../icons/ClipIcon";

const FileField = ({
  placeholder,
  className,
  ...rest
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else if (file) {
      setFile(null);
    }
  };

  return (
    <label className={cn(s.inputField, s.fileField, className)}>
      <input
        type="file"
        {...rest}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span
        className={cn(s.fileField__label, {
          [s.fileField__label_filled]: file,
        })}
      >
        {file ? file.name : placeholder}
      </span>
      <ClipIcon />
    </label>
  );
};

export default FileField;
