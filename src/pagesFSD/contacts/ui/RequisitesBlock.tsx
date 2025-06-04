import { Requisites } from "@/src/entities/contacts/model/types";
import s from "./styles.module.css";

const RequisitesBlock = ({ requisites }: RequisitesProps) => {
  return (
    <div className={s.contacts__requisites}>
      <p className={s.requisites__title}>Реквизиты</p>
      <div className={s.requisites__block}>
        <span className={s.requisites__line}>{requisites.name}</span>
        {requisites.requisites.map((item) => {
          return (
            <span key={item.id} className={s.requisites__line}>
              {item.name}: {item.value}
            </span>
          );
        })}
      </div>
    </div>
  );
};

interface RequisitesProps {
  requisites: Requisites;
}

export default RequisitesBlock;
