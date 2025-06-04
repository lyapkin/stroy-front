import CommercialForm from "@/src/features/getCommercial/ui/CommercialForm";
import s from "./styles.module.css";
import cn from "classnames";

const FormSection = () => {
  return (
    <section className={cn(s.formSection, "section")} id="commercialOfferForm">
      <div className="container">
        <div className={s.form}>
          <h2 className={cn(s.form__title, "section-title")}>
            Вам нужен надежный поставщик{" "}
            <b>комплектующих для строительных объектов?</b>
          </h2>
          <p className={s.form__subtitle}>
            Заполните форму и получите персональное коммерческое предложение
          </p>
          <div className={s.form__form}>
            <CommercialForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
