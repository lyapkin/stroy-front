import dynamic from "next/dynamic";
const Popup = dynamic(() => import("./Popup"), {
  ssr: false,
});

export { Popup };
