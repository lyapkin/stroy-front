import PhoneField from "@/src/shared/ui/form/PhoneField";
import TextareaField from "@/src/shared/ui/form/TextareaField";
import s from "./styles.module.css";
import cn from "classnames";
import InputField from "@/src/shared/ui/form/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import getCookie from "@/src/shared/utils";
import FieldError from "@/src/shared/ui/form/FieldError";
import SubmitButton from "@/src/shared/ui/form/SubmitButton";
import Agreement from "@/src/shared/ui/form/Agreement";

const GetConsultation = ({ className }: GetConsultationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});
  // const changeSearchParams = useChangeSearchParams();

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const url = new URL(
      "requests/consultation/",
      process.env.NEXT_PUBLIC_API_BASE_URL
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(data),
    });

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
      return;
    }
    // const usp = new URLSearchParams({ orderd: "success" });
    // changeSearchParams(usp);
  };
  return (
    <form
      className={cn(s.form, className)}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div>
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
      <div>
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
      <TextareaField
        {...register("comment")}
        name="comment"
        placeholder="Комментарий"
        className={s.form__comment}
      />
      <SubmitButton
        className={s.form__button}
        isSending={isSubmitting}
        isSubmited={isSubmitSuccessful}
      >
        Получит консультацию
      </SubmitButton>
      <Agreement />
    </form>
  );
};

interface GetConsultationProps {
  className?: string;
}

type Form = {
  name: string;
  phone: string;
  comment: string;
};

export default GetConsultation;
