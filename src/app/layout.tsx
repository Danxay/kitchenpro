import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kitchen Factory - Кухни на заказ",
  description: "Кухни по вашим размерам за 14 дней. Без посредников. Экономия до 30%.",
  keywords: "кухни на заказ, кухни москва, производство кухонь, кухни под ключ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
