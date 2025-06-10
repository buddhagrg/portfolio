import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { generateCustomMetadata } from "@/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateCustomMetadata({
  title: "Buddha Gurung",
  description: "Buddha Gurung | Personal site",
});

const setInitialTheme = `
  (function(){
    try{
      const theme = localStorage.getItem("theme");
      if(theme === "DARK"){
        document.documentElement.classList.add("dark");        
      } else {
        document.documentElement.classList.remove("dark");        
      }
    }
    catch(_){}
  })()
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
