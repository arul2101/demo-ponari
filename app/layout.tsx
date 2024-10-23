import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Demo Ponari",
  description: "testing demo Ponari app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}} antialiased`}
      >
        {/* <div className="max-w-[1312px] mx-auto"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
