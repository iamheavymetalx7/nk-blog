import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/bottombar/Footer";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitish Kumar",
  description: "Nitish Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto break-words leading-6 px-52 pt-10 ">
        <Providers>
          <Navbar />
          <main className="container py-10">{children}</main>
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
