import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
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
  title: "Ivan Getov — Built to Last. Built to Lead.",
  description:
    "Maintenance leader, manufacturing professional, and father — writing about the craft of keeping things running.",
  openGraph: {
    title: "Ivan Getov",
    description:
      "Maintenance leader, manufacturing professional, and father — writing about the craft of keeping things running.",
    type: "website",
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
      </body>
    </html>
  );
}
