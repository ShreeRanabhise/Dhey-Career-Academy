import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "DHEY Career Academy | Premium Coaching for Government Exams",
    template: "%s | DHEY Career Academy",
  },
  description: "Join Maharashtra's premier institute for SSC, Police, Army, Navy, Air Force, and MPSC preparation. Expert faculty, rigorous physical training, and guaranteed results.",
  keywords: ["SSC Coaching", "Police Bharti Pune", "Army Agniveer Training", "MPSC Foundation", "Physical Training Academy", "Government Exams"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dheyacademy.com",
    title: "DHEY Career Academy",
    description: "Maharashtra's leading academy for government competitive exams and physical training.",
    siteName: "DHEY Career Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "DHEY Career Academy",
    description: "Maharashtra's leading academy for government competitive exams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Header />
        <main className="flex-1 mt-[76px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
