import type { Metadata } from "next";
import { helveticaNeue } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import { Header, Footer } from "@/src/widgets";
import Contacts from "@/src/widgets/sections/contacts/ui/Contacts";
import CookieConsent from "@/src/widgets/cookieConsent/CookieConsent";
import { YandexMetrikaScript } from "@/src/app/yandex";
import CartLinkWidget from "@/src/entities/cart/ui/CartLink/CartLinkWidget";
import { Suspense } from "react";
import FormSuccess from "@/src/shared/ui/form/FormSuccess";
import Script from "next/script";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={helveticaNeue.variable}>
        <QueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Contacts />
            <Footer />
            <CartLinkWidget />
          </CartProvider>
        </QueryProvider>
        <CookieConsent />
        <Suspense>
          <FormSuccess />
        </Suspense>

        {process.env.NODE_ENV === "production" && <YandexMetrikaScript />}
        <Script
          src="//cdn.callibri.ru/callibri.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Строительные технологии",
  description: "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL + "/"),
};
