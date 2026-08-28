import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppTrigger from "@/components/shared/FloatingWhatsAppTrigger";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#25D366",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Compliance fix: removed unverified claim, see audit notes
export const metadata: Metadata = {
  metadataBase: new URL("https://zechsoft.com"),
  title: {
    default: "Zechsoft | WhatsApp Business API, Marketing Automation & AI Chatbots",
    template: "%s | Zechsoft WhatsApp Automation",
  },
  description:
    "Grow your business with official WhatsApp Business API integration, high-converting broadcast marketing, no-code AI chatbot builder, shared multi-agent inbox, and 1-click WhatsApp payments.",
  keywords: [
    "WhatsApp Business API",
    "WhatsApp Marketing Automation",
    "WhatsApp Chatbot",
    "WhatsApp Broadcast",
    "AiSensy alternative",
    "Wati alternative",
    "WhatsApp Payments",
    "Shared Team Inbox",
    "Meta Cloud API",
    "Green Tick Verification",
    "WhatsApp CRM",
    "Click to WhatsApp Ads",
  ],
  authors: [{ name: "Zechsoft Technologies" }],
  creator: "Zechsoft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zechsoft.com",
    siteName: "Zechsoft",
    title: "Zechsoft - WhatsApp Marketing, AI Chatbots & Business API Platform",
    description:
      "Transform customer engagement with 98% open rates. Send bulk WhatsApp broadcasts, build GPT-4 AI chatbots, and collect direct payments on WhatsApp.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Zechsoft WhatsApp Business Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zechsoft | WhatsApp Business API & AI Marketing Platform",
    description: "Scale sales, broadcasts, and 24/7 AI customer support with the official WhatsApp API platform.",
    creator: "@zechsoft",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth dark`}>
      <body className="min-h-screen flex flex-col bg-[#090D16] text-slate-100 antialiased selection:bg-[#25D366]/30 selection:text-white">
        {/* Ambient Top Glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#25D366]/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
        <div className="fixed top-[40%] right-[-10%] w-[500px] h-[400px] bg-[#06B6D4]/5 blur-[160px] pointer-events-none -z-10 rounded-full" />

        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsAppTrigger />
      </body>
    </html>
  );
}
