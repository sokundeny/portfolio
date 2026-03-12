import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
import NavBar from "@/components/navBar";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const lato = Lato({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SOKUN DENY",
  description: "Sokun Deny's Portfolio",
  icons:{
    icon:"icon.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body className="antialiased">
        <Background/>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}