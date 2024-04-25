import type { Metadata } from "next";
import { DM_Sans, Frank_Ruhl_Libre } from "next/font/google";
import { Header } from "@/components/common/Header";
import '@/styles/common/style.scss'

const font = DM_Sans({weight: ['200', '400', '500', '600', '800'], subsets: ['latin'], variable: '--font-dm'})
const font2 = Frank_Ruhl_Libre({weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-frank'})

export const metadata: Metadata = {
  title: "Arthur Candeia",
  description: "Tire seu projeto do papel agora! Com Arthur Candeia você tem o desenvolvimento que soluciona suas demandas digitais! Crie sites, aplicativos e programas para potencializar seus negócios.",
  icons: {
    icon: './favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${font.variable} ${font2.variable}`}>
        <Header />
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init()</script>
      </body>
    </html>
  );
}
