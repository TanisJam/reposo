import type { Metadata } from 'next';

import './globals.css';
import { Navbar } from '@/app/_components/molecules/Navbar';
import { Footer } from './_components/molecules/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <title>El Reposo del Cuervo</title>
      </head>
      <body className="font-merriweather border-[6px] lg:border-[13px] border-base-100 ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
