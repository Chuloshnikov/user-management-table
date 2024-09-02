import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StoreProvider from "./provider";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sepolture admin panel",
  description: "Test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="flex">
            <Navbar/>
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
