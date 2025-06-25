import SocialLink from "./SocialLink";

const WhatsappLink = ({ link }: { link?: string }) => {
  return (
    <SocialLink
      url={link ? `https://wa.me/${link}` : "#"}
      fileName="whatsapp"
      alt="Логотип вотсап"
    />
  );
};

export default WhatsappLink;
