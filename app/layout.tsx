import type { Metadata } from "next";
import { helveticaNeue } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import { Header, Footer } from "@/src/widgets";
import Contacts from "@/src/widgets/sections/contacts/ui/Contacts";
import CookieConsent from "@/src/widgets/cookieConsent/CookieConsent";
import { YandexMetrikaScript } from "@/src/app/yandex";
import CartLinkWidget from "@/src/entities/cart/ui/CartLink/CartLinkWidget";

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

        {process.env.NODE_ENV === "production" && <YandexMetrikaScript />}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Строительные технологии",
  description: "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL + "/"),
};
