import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leal Busca Tu Casa",
  description: "En Leal Busca Tu Casa, nos especializamos en ayudarte a encontrar la propiedad perfecta que se ajuste a tus necesidades y expectativas. Con más de 20 años de experiencia combinada en el sector inmobiliario de Baja, nuestro equipo ofrece una amplia gama de servicios, desde la compra y venta de propiedades hasta la gestión de alquileres y la inversión inmobiliaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
