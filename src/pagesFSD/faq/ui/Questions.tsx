import { getFAQsApi } from "../api";
import QuestionsList from "./QuestionsList";

const Questions = async () => {
  const faqs = await getFAQsApi();

  return <QuestionsList faqs={faqs} />;
};

export default Questions;
