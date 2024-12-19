import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio Website design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body > {children}</body>
    </html>
  );
}
