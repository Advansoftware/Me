import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = 'https://brunoantunes.space';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bruno Antunes | Desenvolvedor Full Stack",
    template: "%s | Bruno Antunes Dev",
  },
  description:
    "Desenvolvedor full stack e fundador da AdvanSoftware, em Brazópolis/MG. Trabalho com React, Next.js, Node.js, NestJS, PHP e Flutter, e construo produtos com IA: chatbots no WhatsApp, automações e análise de dados.",
  keywords: [
    "Bruno Antunes",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PHP",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "Desenvolvedor Brazópolis",
    "Desenvolvedor Minas Gerais",
    "Freelancer programador",
    "Criação de sites",
    "Desenvolvimento de sistemas",
    "API REST",
    "PostgreSQL",
    "Docker",
    "Inteligência Artificial",
    "Integração de IA",
    "Automação com IA",
    "Chatbot WhatsApp",
    "AdvanSoftware",
    "Fundador AdvanSoftware",
    "Dono de software house",
    "Software house Brazópolis",
  ],
  authors: [{ name: "Bruno Antunes", url: "https://github.com/Advansoftware" }],
  creator: "Bruno Antunes",
  publisher: "Bruno Antunes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Bruno Antunes | Desenvolvedor Full Stack e fundador da AdvanSoftware",
    description:
      "Fundei a AdvanSoftware em Brazópolis/MG. Trabalho com React, Next.js, Node.js, NestJS, PHP, Flutter e IA aplicada a produto.",
    siteName: "Bruno Antunes - Portfólio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bruno Antunes - Desenvolvedor Full Stack e fundador da AdvanSoftware",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Antunes | Desenvolvedor Full Stack e fundador da AdvanSoftware",
    description:
      "Fundei a AdvanSoftware em Brazópolis/MG. React, Next.js, Node.js, NestJS, PHP, Flutter e IA aplicada a produto.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // TODO: Add Google Search Console verification
  },
  alternates: {
    canonical: baseUrl,
  },
};

// Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#bruno-antunes`,
      name: "Bruno Antunes",
      url: baseUrl,
      image: `${baseUrl}/avatar.jpg`,
      sameAs: [
        "https://github.com/Advansoftware",
        "https://advan-site.vercel.app/",
        "https://www.linkedin.com/in/bruno-antunes-284679b6/",
      ],
      jobTitle: ["Desenvolvedor Full Stack", "Fundador da AdvanSoftware"],
      worksFor: { "@id": "https://advan-site.vercel.app/#advansoftware" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brazópolis",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "NestJS",
        "PHP",
        "Flutter",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "Inteligência Artificial",
        "Integração de LLMs",
        "Automação de atendimento",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://advan-site.vercel.app/#advansoftware",
      name: "AdvanSoftware",
      url: "https://advan-site.vercel.app/",
      founder: { "@id": `${baseUrl}/#bruno-antunes` },
      employee: { "@id": `${baseUrl}/#bruno-antunes` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brazópolis",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
