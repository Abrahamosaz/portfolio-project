import type { Metadata } from "next";
import Footer from "@/components/Footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";

export const metadata: Metadata = {
  title: "Abraham Omorisiagbon",
  description: "Personal website of Abraham Omorisiagbon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full">
        {children}
        <Footer />
        <WhatsAppChatbot phoneNumber="2348061909748" />
      </body>
    </html>
  );
}
