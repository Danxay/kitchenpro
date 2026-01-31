import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "КухниПро — Кухни на заказ в Москве | Производство за 14 дней",
  description: "Производство кухонь на заказ по индивидуальным размерам. Собственная фабрика, премиум материалы Egger и Blum, гарантия 5 лет. Бесплатный замер и 3D-проект. Экономия до 30% без посредников.",
  keywords: "кухни на заказ, кухни москва, производство кухонь, кухни под ключ, кухни от производителя, заказать кухню, кухня недорого, кухни Egger, мебель для кухни",
  authors: [{ name: "КухниПро" }],
  creator: "КухниПро",
  publisher: "КухниПро",
  formatDetection: {
    telephone: true,
    email: true,
  },
  metadataBase: new URL("https://kuhnipro.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "КухниПро — Кухни на заказ в Москве",
    description: "Производство кухонь на заказ за 14 дней. Собственная фабрика, гарантия 5 лет.",
    url: "https://kuhnipro.ru",
    siteName: "КухниПро",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "КухниПро — Кухни на заказ в Москве",
    description: "Производство кухонь на заказ за 14 дней. Собственная фабрика, гарантия 5 лет.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="preload"
          href="/fonts/material-symbols-outlined.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "КухниПро",
              "description": "Производство кухонь на заказ в Москве",
              "url": "https://kuhnipro.ru",
              "telephone": "+7 (495) 248-35-62",
              "email": "info@kuhnipro.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Профсоюзная, д. 76, корп. 2",
                "addressLocality": "Москва",
                "postalCode": "117393",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 55.6471,
                "longitude": 37.5237
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "20:00"
              },
              "priceRange": "₽₽",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "547"
              }
            })
          }}
        />
      </head>
      <body className="bg-white font-sans text-text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
