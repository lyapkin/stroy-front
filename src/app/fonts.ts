import localFont from "next/font/local";

const helveticaNeue = localFont({
  src: [
    { path: "../../public/fonts/HelveticaNeue-Thin.otf", weight: "200" },
    { path: "../../public/fonts/HelveticaNeue-Light.otf", weight: "300" },
    { path: "../../public/fonts/HelveticaNeue-Roman.otf", weight: "400" },
    { path: "../../public/fonts/HelveticaNeue-Medium.otf", weight: "500" },
    { path: "../../public/fonts/HelveticaNeue-Bold.otf", weight: "700" },
  ],
  variable: "--main-font",
});

export { helveticaNeue };
