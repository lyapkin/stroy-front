"use client";
import s from "./styles.module.css";
import QuestionItem from "./QuestionItem";
import { useCategories } from "@/src/features";
import { Faq } from "../types";

const QuestionsList = ({ faqs }: QuestionsListProps) => {
  const { currentCategory } = useCategories();

  const result =
    currentCategory === null
      ? faqs
      : faqs.filter((item) => item.categories.includes(currentCategory));

  const limit = Math.ceil(result.length / 2);

  const content1 = result.slice(0, limit).map((item) => {
    return <QuestionItem key={item.id} faq={item} />;
  });

  const content2 = result.slice(limit).map((item) => {
    return <QuestionItem key={item.id} faq={item} />;
  });
  return (
    <div className={s.faq__questions}>
      <ul className={s.questions}>{content1}</ul>
      <ul className={s.questions}>{content2}</ul>
    </div>
  );
};

interface QuestionsListProps {
  faqs: Faq[];
}

export default QuestionsList;
