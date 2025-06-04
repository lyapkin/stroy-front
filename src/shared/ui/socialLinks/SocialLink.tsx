import Image from "next/image";
import Link from "next/link";
import { SocialLinkProps } from "./types";

const SocialLink = ({ url, fileName, alt }: SocialLinkProps) => {
  return (
    <Link href={url} style={{ display: "flex" }} target={"_blank"}>
      <Image
        src={`/images/social/${fileName}.webp`}
        width={24}
        height={24}
        alt={alt}
      />
    </Link>
  );
};

export default SocialLink;
