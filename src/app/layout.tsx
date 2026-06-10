import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { SEO_DATA, getLocalBusinessSchema, getCarRentalSchema } from "@/utils/seo";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  keywords: [
    "car rental Datia",
    "taxi service Datia",
    "Patel Travels",
    "Innova Crysta rental Datia",
    "wedding car rental Datia",
    "outstation taxi Madhya Pradesh",
    "Badoni car hire",
    "travel agency Datia",
    "Bundelkhand tours",
    "tourist cab Jhansi Gwalior"
  ],
  metadataBase: new URL(SEO_DATA.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: SEO_DATA.url,
    siteName: SEO_DATA.businessName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Patel Travels Innova Crysta",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    images: ["https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1200&h=630"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getCarRentalSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
