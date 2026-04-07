import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";
import { I18nProvider } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DUJARI — Collectible Pop-Art",
  description:
    "Hand-painted bottles and panels. Each piece is unique. Each piece is a statement. Collectible pop-art by DUJARI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        <I18nProvider>
          <BodyWrapper>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </BodyWrapper>
        </I18nProvider>
      </body>
    </html>
  );
}
