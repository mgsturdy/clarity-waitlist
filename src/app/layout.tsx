import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Clarity Finance - Unlock Your Inheritance",
  description: "The first marketplace for probate and pre-probate inheritance advances. Access your wealth today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${crimson.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17773212351"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17773212351');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
