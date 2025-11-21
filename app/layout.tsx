import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://metar.so"),
  title: "Metar | HTTP 402 Protocol for Programmatic APIs",
  description: "Production-ready SDK for pay-per-call APIs using USDC micropayments on Solana. Built for AI agents, microservices, and any programmatic client.",
  openGraph: {
    title: "Metar | HTTP 402 Protocol for Programmatic APIs",
    description: "Production-ready SDK for pay-per-call APIs using USDC micropayments on Solana.",
    type: "website",
    images: [
      {
        url: "/metar.png",
        width: 1200,
        height: 630,
        alt: "Metar Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metar | HTTP 402 Protocol for Programmatic APIs",
    description: "Production-ready SDK for pay-per-call APIs using USDC micropayments on Solana.",
    images: ["/metar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />
        <main className="pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
