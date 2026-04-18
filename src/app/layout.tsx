import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getov.xyz"),
  title: "Ivan Getov — Built to Last. Built to Lead.",
  description:
    "Maintenance leader, manufacturing professional, and father — writing about the craft of keeping things running.",
  openGraph: {
    title: "Ivan Getov — Built to Last. Built to Lead.",
    description:
      "Maintenance leader, manufacturing professional, and father — writing about the craft of keeping things running.",
    url: "https://getov.xyz",
    siteName: "Ivan Getov",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Getov — Built to Last. Built to Lead.",
    description:
      "Maintenance leader, manufacturing professional, and father — writing about the craft of keeping things running.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-background text-text-primary font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
