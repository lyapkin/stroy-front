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
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <span
        style={{
          aspectRatio: "1/1",
          position: "relative",
          height: "100%",
          display: "flex",
          minWidth: "0",
        }}
      >
        <Image
          src={"/images/logo-pic.svg"}
          alt="Логотип компании Строительные технологии"
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
      <span
        style={{
          height: "56%",
          aspectRatio: "163/56",
          position: "relative",
          display: "flex",
          minWidth: "0",
        }}
      >
        <Image
          src={"/images/logo-text.svg"}
          alt="Логотип компании Строительные технологии"
          fill
          style={{ objectFit: "contain" }}
        />
      </span>
    </Link>
  );
};

export default Logo;
