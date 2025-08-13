"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Utm } from "@/src/shared/utils";

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(103542108, "hit", url);
  }, [pathname, searchParams]);

  useEffect(() => {
    Utm.setUtm(searchParams);
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.href.includes("mailto:")) {
        link.addEventListener("copy", () => {
          console.log("copyMail");
          ym(103542108, "reachGoal", "copyMail");
        });
      }
    });
  }, []);

  // useEffect(() => {
  //   const links = document.querySelectorAll("a");
  //   links.forEach(function (link) {
  //     if (link.href.includes("mailto:")) {
  //       link.addEventListener("copy", function () {
  //         dataLayer.push({
  //           event: "copyMail",
  //         });
  //         ym(103148704, "reachGoal", "copyMail");
  //       });
  //     } else if (link.href.includes("tel:")) {
  //       link.addEventListener("copy", function () {
  //         dataLayer.push({
  //           event: "copyTel",
  //         });
  //       });
  //     }
  //   });
  //   document.addEventListener("copy", function (e) {
  //     dataLayer.push({
  //       event: "copyText",
  //       text: window.getSelection ? window.getSelection().toString() : "",
  //     });
  //   });
  // }, []);

  return null;
}
