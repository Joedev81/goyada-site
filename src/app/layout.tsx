import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOYADA",
  description: "Dark luxury streetwear",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}