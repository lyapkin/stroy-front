import s from "./styles.module.css";
import cn from "classnames";
import CertificatesContent from "./CertificatesContent";

const Certificates = () => {
  return (
    <section className={cn(s.certificatesSection, "section")}>
      <div className="container">
        <div className={s.certificates}>
          <h2 className={cn(s.certificates__title, "section-title")}>
            Системы качества продукции <b>подтверждены на мировом уровне</b>
          </h2>
          <p className={s.certificates__text}>
            <b>Cоответствует государственным стандартам Гост, ТУ и ОСТ</b>{" "}
            Сертификат соответствия ГОСТ ИСО 9001-2015. Система менеджмента
            качества применительно к оптовой торговле
          </p>
          <div className={s.certificates__content}>
            <CertificatesContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
