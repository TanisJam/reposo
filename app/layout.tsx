import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/app/_components/molecules/Navbar';
import { Footer } from './_components/molecules/Footer';

export const metadata: Metadata = {
  title: 'Reposo del Cuervo - D&D Discord Server',
  assets: ['/crow.svg'],
  openGraph: {
    title: 'Reposo del Cuervo - D&D Discord Server',
    description: 'Servidor de Dungeons & Dragons en Argentina',
    url: 'https://reposodelcuervo.mnr.ar/',
    siteName: 'Reposo del Cuervo - D&D Discord Server',
    images: [
      {
        url: 'https://reposodelcuervo.mnr.ar/reposo.jpg',
        width: 1200,
        height: 630,
        alt: 'Reposo del Cuervo - D&D Discord Server',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  robots: 'index, follow',
  applicationName: 'Reposo del Cuervo - D&D Discord Server',
  keywords: [
    'dungeons and dragons',
    'dd',
    'rol',
    'discord server',
    'reposodelcuervo',
    'mnr.ar',
  ],
  generator: 'Reposo del Cuervo - D&D Discord Server',
  category: 'gaming',
  classification: 'game',
  formatDetection: {
    telephone: false,
  },
  publisher: 'TanisJam',
  creator: 'TanisJam',
  description:
    'Únete a nosotros en Reposo del Cuervo, un servidor de Discord dedicado a organizar partidas de rol de Dungeons & Dragons (D&D). ¡Explora aventuras, conéctate con otros jugadores y desata tu creatividad!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/crow.svg" sizes="any" />
      </head>
      <body className="font-merriweather border-[6px] lg:border-[13px] border-base-100 ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
