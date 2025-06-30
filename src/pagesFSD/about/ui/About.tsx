import cn from "classnames";
import s from "./styles.module.css";
import Hero from "@/src/widgets/sections/hero/ui/Hero";
import { FormSection } from "@/src/widgets/form";
import ProductQuality from "@/src/widgets/sections/productQuality/ui/ProductQuality";
import AboutFirst from "./sections/aboutFirst/AboutFirst";
import Remainder from "@/src/widgets/sections/remainder/ui/Remainder";
import AboutDigits from "@/src/widgets/sections/aboutDigits/ui/AboutDigits";
import AboutCompany from "./sections/aboutCompany/AboutCompany";
import { getPageApi } from "@/src/shared/api";

const About = async () => {
  const page = await getPageApi("about");
  return (
    <div className={cn("page", s.aboutPage)}>
      <main>
        <Hero
          title={page.title}
          subtitle={
            "<p>«Строительные технологии» - команда профессионалов с многолетним опытом оснащения строительных объектов комплектующих для опалубки и строительных лесов. Позвоните нам, и получите грамотную консультацию от специалистов отдела продаж.</p>"
          }
          caption={""}
          video="/video/1"
        />
        <AboutFirst />
        <Remainder />
        <AboutDigits />
        <AboutCompany />
        <ProductQuality />
      </main>
      <FormSection />
    </div>
  );
};

export default About;
