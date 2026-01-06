import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bruno Antunes | Full Stack Developer",
  description:
    "Desenvolvedor Full Stack apaixonado por tecnologia. Especialista em React, Vue.js, Node.js e PHP. Criando soluções inovadoras que fazem a diferença.",
  keywords: ["Bruno Antunes", "Full Stack Developer", "React", "Vue.js", "Node.js", "PHP", "Desenvolvedor"],
  authors: [{ name: "Bruno Antunes", url: "https://github.com/Advansoftware" }],
  creator: "Bruno Antunes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Bruno Antunes | Full Stack Developer",
    description:
      "Desenvolvedor Full Stack apaixonado por tecnologia. Especialista em React, Vue.js, Node.js e PHP.",
    siteName: "Bruno Antunes Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Antunes | Full Stack Developer",
    description:
      "Desenvolvedor Full Stack apaixonado por tecnologia. Especialista em React, Vue.js, Node.js e PHP.",
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
    <html lang="pt-BR">
      <body className={inter.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
