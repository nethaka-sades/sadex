import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'

const siteFont = localFont({ src: './nevis.woff2' })

export const metadata: Metadata = {
  title: "Sadex",
  description: "Smt abt me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${siteFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
