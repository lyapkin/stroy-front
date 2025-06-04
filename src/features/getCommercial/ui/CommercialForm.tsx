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

const CommercialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const body = new FormData();
    body.set("name", data.name);
    body.set("phone", data.phone);
    body.set("comment", data.comment);
    body.set("file", data.file[0], data.file[0].name);

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

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
    }
  };

  return (
    <form className={s.commercialForm} onSubmit={handleSubmit(submitHandler)}>
      {/* <InputField label="Марка, размер" name="charachteristc" />
      <InputField label="Вид деятельности" name="activity" /> */}
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
          {...register("file", { required: "Поле обязательно для заполнения" })}
          placeholder="Прикрепите свой чертеж"
          name="file"
          aria-invalid={errors.file ? true : false}
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
