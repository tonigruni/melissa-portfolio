import type { Metadata } from "next";
import { Hanken_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientEffects from "@/components/ClientEffects";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--hanken-font",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--inter-font",
});

export const metadata: Metadata = {
  title: "Melissa Morales | Project Manager & Construction Coordinator",
  description:
    "Project Manager and Construction Coordinator with 7+ years delivering complex builds across retail, hospitality, healthcare, and residential sectors. Architectural background, bilingual (EN/ES), remote-ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface selection:bg-primary selection:text-white overflow-x-hidden">
        <ClientEffects />
        {children}
      </body>
    </html>
  );
}
