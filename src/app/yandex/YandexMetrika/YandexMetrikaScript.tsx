"use client";
import Script from "next/script";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const YandexMetrika = dynamic(() => import("./YandexMetrika"), { ssr: false });

const YandexMetrikaScript = () => {
  return (
    <>
      {/* <!-- Yandex.Metrika counter --> */}
      <Script
        type="text/javascript"
        id="metrika-counter"
        strategy="afterInteractive"
      >
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(103148704, "init", {
              defer: true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/103148704"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Script
        type="text/javascript"
        id="metrika-counter2"
        strategy="afterInteractive"
      >
        {`(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103542108', 'ym');

        ym(103542108, 'init', {
              defer: true,
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
        });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/103542108"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Suspense fallback={<></>}>
        <YandexMetrika />
      </Suspense>
      {/* <!-- /Yandex.Metrika counter --> */}
    </>
  );
};

export default YandexMetrikaScript;
