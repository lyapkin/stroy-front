import type { Metadata } from "next";
import { helveticaNeue } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import { Header, Footer } from "@/src/widgets";
import Contacts from "@/src/widgets/sections/contacts/ui/Contacts";
import CookieConsent from "@/src/widgets/cookieConsent/CookieConsent";
import { YandexMetrikaScript } from "@/src/app/yandex";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.NODE_ENV);
  return (
    <html lang="ru">
      <body className={helveticaNeue.variable}>
        <QueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Contacts />
            <Footer />
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
