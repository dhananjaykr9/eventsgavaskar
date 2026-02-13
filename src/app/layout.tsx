import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atul & Vaishnavi | Wedding Celebration",
  description: "Join us in celebrating the wedding of Atul and Vaishnavi",
  icons: {
    icon: "/gavaskar-logo.png",
    shortcut: "/gavaskar-logo.png",
    apple: "/gavaskar-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Lato:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
