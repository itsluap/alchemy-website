import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alchemy - Made-in-the-US Energy Storage Solutions",
  description: "Versatile power solutions for C&I facilities – solve outages, sags, and demand charges with instant response and scalability. Made in the US for reliability.",
  keywords: "energy storage for warehouses, battery solutions power quality, industrial ESS outages, BESS, behind-the-meter energy storage",
  openGraph: {
    title: "Alchemy - Made-in-the-US Energy Storage Solutions",
    description: "Versatile power solutions for C&I facilities – solve outages, sags, and demand charges with instant response and scalability.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
