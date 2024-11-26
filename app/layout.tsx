import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { euclid } from "./ui/fonts/font";



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
