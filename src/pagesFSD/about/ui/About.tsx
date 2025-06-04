import cn from "classnames";
import s from "./styles.module.css";
import Hero from "@/src/widgets/sections/hero/ui/Hero";
import { FormSection } from "@/src/widgets/form";
import ProductQuality from "@/src/widgets/sections/productQuality/ui/ProductQuality";
import AboutFirst from "./sections/aboutFirst/AboutFirst";
import Remainder from "@/src/widgets/sections/remainder/ui/Remainder";
import AboutDigits from "@/src/widgets/sections/aboutDigits/ui/AboutDigits";
import AboutCompany from "./sections/aboutCompany/AboutCompany";

const About = () => {
  return (
    <div className={cn("page", s.aboutPage)}>
      <main>
        <Hero
          title="О компании<br /> Строительные технологии"
          subtitle={
            'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"'
          }
          caption={"В любых объёмах с доставкой по всей России и СНГ"}
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
