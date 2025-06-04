import Logo from "@/src/shared/ui/Logo/Logo";
import s from "./styles.module.css";
import TelegramLink from "@/src/shared/ui/socialLinks/TelegramLink";
import WhatsappLink from "@/src/shared/ui/socialLinks/WhatsappLink";
import FooterNav from "./FooterNav";
import FooterCatalog from "./FooterCatalog";
import FooterContacts from "./FooterContacts";
import FooterEmails from "./FooterEmails";
import Bottom from "./Bottom";

const Footer = () => {
  return (
    <footer className={s.footerSection}>
      <div className="container">
        <div className={s.footer}>
          <FooterNav />
          <FooterCatalog />
          <FooterContacts />
          <FooterEmails />
          <div className={s.footer__logo}>
            <Logo />
          </div>
          <p className={s.footer__about}>
            Производство и поставка комплектующих для строительных объектов
          </p>
          <div className={s.footer__social}>
            <div className={s.footer__socialList}>
              <TelegramLink />
              <WhatsappLink />
              {/* <VkLink /> */}
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </footer>
  );
};

export default Footer;
