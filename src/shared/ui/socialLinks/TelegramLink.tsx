import SocialLink from "./SocialLink";

const TelegramLink = ({ link }: { link?: string }) => {
  return (
    <SocialLink
      url={link ? `https://t.me/${link}` : "#"}
      fileName="telegram"
      alt="Логотип телеграм"
    />
  );
};

export default TelegramLink;
