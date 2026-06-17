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
    "Shri Balaji Travels",
    "car rental Dabra",
    "taxi service Gwalior",
    "Toyota Glanza rental Dabra",
    "Toyota Rumion 7 seater Gwalior",
    "shaadi parti car booking Dabra",
    "outstation taxi Madhya Pradesh",
    "car hire Dabra Gwalior",
    "travel agency Dabra",
    "tourist cab Gwalior Jhansi",
    "Virendrasingh Patel"
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
        url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/169435/rumion-exterior-right-front-three-quarter-3.jpeg?q=80",
        width: 664,
        height: 374,
        alt: "Shri Balaji Travels — Toyota Rumion",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    images: ["https://imgd.aeplcdn.com/664x374/n/cw/ec/169435/rumion-exterior-right-front-three-quarter-3.jpeg?q=80"],
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
