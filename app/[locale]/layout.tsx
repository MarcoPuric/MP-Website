import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { ThemeProvider } from "@/components/ui/theme-provider";
import AuroraBackground from "@/components/ui/aurora-background";
import { Toaster } from "sonner";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Puric – Site Reliability Engineer",
  description:
    "Offizielle Bewerbungswebsite von Marco Puric mit Fokus auf Cloud, Cybersecurity & AI.",
  metadataBase: new URL("https://marco-puric.dev"),
  openGraph: {
    title: "Marco Puric – Site Reliability Engineer",
    description: "Skills, Werdegang & Zertifikate auf einen Blick",
    url: "https://marco-puric.dev",
    siteName: "Marco Puric",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marco Puric – Bewerbungsseite",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Puric – Bewerbungsseite",
    description: "Profil & Tech-Skills von Marco Puric",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// 🌐 RootLayout für i18n (next-intl)
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // passende Übersetzungen laden (messages/de.json bzw. en.json)
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuroraBackground />
            {children}
          </ThemeProvider>
          <Toaster position="top-center" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
