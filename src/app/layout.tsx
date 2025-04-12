import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Telugu } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistAnek = Anek_Telugu ({
  variable:"--font-geist-anek",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Max Araye",
  description: "Développeur Back end",
  icons: {
    icon:'/maxpro3.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistAnek.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
