import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
      }}
    >
      <Image
        src={"/images/logo.png"}
        alt="Логотип компании Строительные технологии"
        fill
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
};

export default Logo;
