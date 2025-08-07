"use client";
import s from "./styles.module.css";
import PhoneField from "@/src/shared/ui/form/PhoneField";
import TextareaField from "@/src/shared/ui/form/TextareaField";
import FileField from "@/src/shared/ui/form/FileField";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "@/src/shared/ui/form/InputField";
import FieldError from "@/src/shared/ui/form/FieldError";
import cn from "classnames";
import getCookie from "@/src/shared/utils";
import SubmitButton from "@/src/shared/ui/form/SubmitButton";
import Agreement from "@/src/shared/ui/form/Agreement";
// import useYM from "@/src/shared/hooks/useYM";

const CommercialForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});
  // const { reachGoal } = useYM(103148704);

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const body = new FormData();
    body.set("name", data.name);
    body.set("phone", data.phone);
    body.set("comment", data.comment);
    if (data.file.length !== 0) {
      body.set("file", data.file[0], data.file[0].name);
    }

    const url = new URL(
      "requests/commercial/",
      process.env.NEXT_PUBLIC_API_BASE_URL
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body,
    });

    if (res.status === 400) {
      const error = await res.json();
      if ("file" in error) {
        setError("file", { message: error.file[0] });
      }
      if ("phone" in error) {
        setError("phone", { message: error.phone[0] });
      }
      return;
    }

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
    }
    // reachGoal("forms_kp");
  };

  const validateFile = (fileList: FileList) => {
    // if (fileList.length === 0) {
    //   return "Поле обязательно для заполнения";
    // }
    if (fileList.length === 0) {
      return true;
    }
    const file = fileList[0];
    if (file.size > 10 * 1024 * 1024) {
      return `Разме файла не должен превышать 10MB; Размер загружаемого файла ${(
        file.size /
        1024 /
        1024
      ).toFixed(1)}MB`;
    }
    const fileExtension = file.name.split(".").pop()?.toLowerCase();
    if (fileExtension && fileExtension !== "pdf") {
      return "Файл должен быть в формате pdf";
    }

    return true;
  };

  return (
    <form className={s.commercialForm} onSubmit={handleSubmit(submitHandler)}>
      <div className={s.commercialForm__field}>
        <InputField
          placeholder="Введите имя"
          aria-invalid={errors.name ? true : false}
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 2,
              message: "Минимальная длина вводимого значения: 2",
            },
            maxLength: {
              value: 32,
              message: "Максимальная длина вводимого значения: 32",
            },
          })}
        />
        {errors.name?.message && <FieldError message={errors.name.message} />}
      </div>
      <div className={s.commercialForm__field}>
        <PhoneField
          placeholder="Номер телефона"
          {...register("phone", {
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /(^\+\d{9,19}$)|(^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$)/,
              message: "Номер телефона введен неверно",
            },
          })}
          aria-invalid={errors.phone ? true : false}
        />
        {errors.phone?.message && <FieldError message={errors.phone.message} />}
      </div>
      <div className={cn(s.commercialForm__field, s.commercialForm__full)}>
        <FileField
          {...register("file", {
            // required: "Поле обязательно для заполнения",
            validate: validateFile,
          })}
          placeholder="Прикрепите свой чертеж"
          name="file"
          aria-invalid={errors.file ? true : false}
          accept="application/pdf"
        />
        {errors.file?.message && <FieldError message={errors.file.message} />}
      </div>
      <TextareaField
        {...register("comment")}
        name="comment"
        placeholder="Комментарий"
        className={s.commercialForm__full}
      />
      <SubmitButton
        className={s.commercialForm__button}
        isSending={isSubmitting}
        isSubmited={isSubmitSuccessful}
      >
        Получить ком. пред
      </SubmitButton>
      <Agreement />
    </form>
  );
};

type Form = {
  name: string;
  phone: string;
  file: FileList;
  comment: string;
};

export default CommercialForm;
