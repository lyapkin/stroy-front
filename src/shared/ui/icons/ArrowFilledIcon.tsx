import { HTMLAttributes } from "react";

const ArrowFilledIcon = ({ ...props }: HTMLAttributes<SVGElement>) => {
  return (
    <svg
      viewBox="0 0 8 4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M-1.74846e-07 -4.76837e-07L4 4L8 -8.26528e-07L-1.74846e-07 -4.76837e-07Z" />
    </svg>
  );
};

export default ArrowFilledIcon;
