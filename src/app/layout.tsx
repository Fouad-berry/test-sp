import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const interFont = localFont({
  src: [
    {
      path: "/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-inter",
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
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
