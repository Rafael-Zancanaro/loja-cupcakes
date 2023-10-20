import Aside from "@/components/aside";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "Cupecakes Store";
const description = "Loja de cupcakes feita para um trabalho da faculdade.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.variable}>
        <Toaster />
        <Suspense fallback="Loading..."></Suspense>
        <Navbar />
        <Aside />
        <div className="p-4 sm:ml-64  bg-gray-400 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
