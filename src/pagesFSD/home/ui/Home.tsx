import { FormSection } from "@/src/widgets/form";
import { BlogPlugin } from "@/src/widgets/blogPlugin";
import cn from "classnames";
import s from "./styles.module.css";
import Hero from "@/src/widgets/sections/hero/ui/Hero";
import ProductQuality from "@/src/widgets/sections/productQuality/ui/ProductQuality";
import Remainder from "@/src/widgets/sections/remainder/ui/Remainder";
import AboutDigits from "@/src/widgets/sections/aboutDigits/ui/AboutDigits";
import Catalog from "@/src/widgets/sections/catalog/ui/Catalog";
import Gallery from "@/src/widgets/sections/gallery/ui/Gallery";
import Clients from "@/src/widgets/sections/clients/ui/Clients";
import Certificates from "@/src/widgets/sections/certificates/ui/Certificates";
import Production from "@/src/widgets/sections/production/ui/Production";

const Home = () => {
  return (
    <div className={cn("page", s.homePage)}>
      <main>
        <Hero
          title="Производство и поставка<br /> комплектующих для<br /> строительных объектов"
          caption={"В любых объёмах с доставкой по всей России и СНГ"}
          video="/video/1"
        />
        <Production />
        <Catalog />
        <Remainder />
        <ProductQuality />
        <AboutDigits />
        <Gallery />
        <Certificates />
        <Clients />
      </main>
      <FormSection />
      <BlogPlugin />
    </div>
  );
};

export default Home;
