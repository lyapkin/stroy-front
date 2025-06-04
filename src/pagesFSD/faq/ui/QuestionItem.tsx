import s from "./styles.module.css";
import Expender from "@/src/shared/ui/Expender/Expender";
import ArrowDownIcon from "@/src/shared/ui/icons/ArrowDownIcon";
import { Faq } from "../types";

const QuestionItem = ({ faq }: QuestionItemProps) => {
  return (
    <Expender
      header={<span className={s.item__title}>{faq.question}</span>}
      indicator={<ArrowDownIcon />}
      isOpenDefault={false}
      className={s.item}
    >
      <div className={s.item__content}>
        <div
          className={`${s.ckContent}`}
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        ></div>
      </div>
    </Expender>
  );
};

interface QuestionItemProps {
  faq: Faq;
}

export default QuestionItem;
