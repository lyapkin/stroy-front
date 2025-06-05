import { Home } from "@/src/pagesFSD";
import Breadcrumbs from "@/src/widgets/breadcrumbs/Breadcrumbs";

const HomePage = () => {
  return (
    <>
      <Breadcrumbs home />
      <Home />
    </>
  );
};

export default HomePage;
