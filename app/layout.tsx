import type { Metadata } from "next";
import { helveticaNeue } from "@/src/app/fonts";
import "@/src/app/globals.css";
import { CartProvider, QueryProvider } from "@/src/app/providers";
import { Header, Footer } from "@/src/widgets";
import Contacts from "@/src/widgets/sections/contacts/ui/Contacts";

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
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Строительные технологии",
  description: "",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL + "/"),
};
