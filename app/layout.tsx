import type { Metadata } from "next";
import { helveticaNeue } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import { Header, Footer } from "@/src/widgets";
// import Script from "next/script";

export const metadata: Metadata = {
  title: "Строительные технологии",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={helveticaNeue.variable}>
        {/* <Script
          src="https://api-maps.yandex.ru/v3/?apikey=01e77374-c26f-49ab-9589-3e9c8349f150&lang=ru_RU"
          strategy="beforeInteractive"
        /> */}
        <QueryProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
