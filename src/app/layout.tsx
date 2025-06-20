import type { Metadata } from "next";
import { Titillium_Web, Manrope } from "next/font/google";
import "../styles/globals.css";
import PublicNav from "../components/PublicNav"; // Import nav

const titillium = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700"], // adjust as needed
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"], // adjust as needed
});

export const metadata: Metadata = {
  title: "BuiltSmart",
  description:
    "Innovatieve materialen database en kennisplatform voor de bouwsector.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${titillium.variable} ${manrope.variable}`}>
      <body>
        <PublicNav /> {/* This will show the nav on every page */}
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
