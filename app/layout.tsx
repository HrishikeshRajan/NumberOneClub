import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./style.css";

export const euclid = localFont({
  src: [
    {
      path: './fonts/EuclidCircularA-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/EuclidCircularA-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/EuclidCircularA-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/EuclidCircularA-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-euclid',
})

export const metadata: Metadata = {
  title: "NumberOne Club",
  description: "StartUp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${euclid.variable} bg-main-gradient bg-no-repeat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
