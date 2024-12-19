import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Kwabena Portfolio Website",
  description: "Portfolio Website design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head><link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Charm&family=Comic+Neue&family=IBM+Plex+Sans&family=Itim&family=Open+Sans:ital,wght@0,300..800;1,
    300..800&family=Poppins&display=swap" rel="stylesheet"/>
    <link rel="icon" type="/image/png" href="imgs/Portfolio-2.png"/>
    </Head>
      <body>{children}</body>
    </html>
  );
}
