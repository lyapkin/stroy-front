import { StyleHTMLAttributes } from "react";

const ArrowDownIcon = ({ style }: StyleHTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path d="M8 10L7.87071e-07 1.90572L1.88087 -1.23433e-06L8 6.19529L14.1178 -1.64547e-07L16 1.90438L8 10Z" />
    </svg>
  );
};

export default ArrowDownIcon;
