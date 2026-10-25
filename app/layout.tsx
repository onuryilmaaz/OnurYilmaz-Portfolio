import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Grain from "@/components/grain";
import { themeInitScript } from "@/context/theme-context";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onur Yılmaz | Full-Stack Developer",
  description:
    "Onur Yılmaz, Noktasal Yazılım'da React ve Node.js odaklı full-stack geliştirici. Full-stack developer focused on React, Node.js and GIS.",
  openGraph: {
    title: "Onur Yılmaz | Full-Stack Developer",
    description: "Full-stack developer focused on React, Node.js and GIS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f4f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Grain />
      </body>
    </html>
  );
}
