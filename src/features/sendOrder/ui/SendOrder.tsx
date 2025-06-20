import s from "./styles.module.css";
import PhoneField from "@/src/shared/ui/form/PhoneField";
import TextareaField from "@/src/shared/ui/form/TextareaField";
import cn from "classnames";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButton from "@/src/shared/ui/form/SubmitButton";
import FieldError from "@/src/shared/ui/form/FieldError";
import InputField from "@/src/shared/ui/form/InputField";
import getCookie from "@/src/shared/utils";
import { useCart } from "@/src/app/providers/CartProvider/CartProvider";
import useChangeSearchParams from "@/src/shared/hooks/useChangeSearchParams";
import Agreement from "@/src/shared/ui/form/Agreement";

const SendOrder = ({ className }: SendOrderProps) => {
  const { cart, setCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Form>({});
  const changeSearchParams = useChangeSearchParams();

  if (!cart) {
    return null;
  }

  const submitHandler: SubmitHandler<Form> = async (data) => {
    const body: Form & { items: Record<"variant" | "quantity", number>[] } = {
      ...data,
      items: Object.entries(cart).map((item) => ({
        variant: Number(item[0]),
        quantity: item[1],
      })),
    };

    const url = new URL(
      "requests/order/",
      process.env.NEXT_PUBLIC_API_BASE_URL
    );

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify(body),
    });

    if (res.status !== 201) {
      const error = await res.json();
      console.log(error);
      return;
    }
    setCart({});
    const usp = new URLSearchParams({ ordered: "success" });
    changeSearchParams(usp);
  };

  return (
    <form
      className={cn(s.cartForm, className)}
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
        className={s.cartForm__comment}
      />
      <SubmitButton
        className={s.cartForm__button}
        isSending={isSubmitting}
        isSubmited={isSubmitSuccessful}
      >
        Оформить заказ
      </SubmitButton>
      <Agreement />
    </form>
  );
};

interface SendOrderProps {
  className?: string;
}

type Form = {
  name: string;
  phone: string;
  comment: string;
};

export default SendOrder;
