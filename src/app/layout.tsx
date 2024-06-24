import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description:
    "Discover your next adventure with our travel app! Plan trips, book flights, find accommodations, and explore new destinations effortlessly. Start your journey today and experience the world like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Navbar />
        <main className="container py-10">{children}</main>
      </body>
    </html>
  );
}
