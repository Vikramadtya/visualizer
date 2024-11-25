import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import NavigationBar from "@/components/organism/header/navigationBar";
import Footer from "@/components/organism/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen flex-col justify-between">
          <NavigationBar />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
