import s from "./styles.module.css";
import cn from "classnames";
import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";
import GetConsultationPopup from "@/src/features/getConsultation/ui/GetConsultationPopup";

const Hero = ({ title, subtitle, caption, video }: HeroProps) => {
  return (
    <section className={cn(s.heroSectionWrapper)}>
      <div className={cn(s.heroSection, "hero")}>
        <div className="container">
          <div className={s.hero}>
            <div className={s.hero__text}>
              <h1
                className={s.hero__title}
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              {subtitle && <p className={s.hero__subtitle}>{subtitle}</p>}
              <div className={s.hero__caption}>
                <span className={s.caption__decoration}>
                  <svg
                    width="40"
                    height="8"
                    viewBox="0 0 40 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="4"
                      cy="4"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle
                      opacity="0.4"
                      cx="20"
                      cy="4"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle
                      cx="36"
                      cy="4"
                      r="3"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <p className={s.caption__text}>{caption}</p>
              </div>
            </div>
            <div className={s.hero__cta}>
              <CustomLink
                href={"#commercialOfferForm"}
                className={s.cta__button}
              >
                Получить ком. пред
              </CustomLink>
              <GetConsultationPopup
                className={cn(s.cta__button, s.getConsultationButton)}
                caption={"Получить консультацию"}
              />
            </div>
          </div>
        </div>
      </div>
      <video autoPlay loop muted playsInline className={s.videoBg}>
        <source src={`${video}.webm`} type="video/webm" />
        <source src={`${video}.mp4`} type="video/mp4" />
      </video>
    </section>
  );
};

interface HeroProps {
  title: string;
  subtitle?: string;
  caption: string;
  video: string;
}

export default Hero;
