import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RoyalPartner | L'eccellenza per il tuo Server",
  description: "Network professionale per la crescita di server Discord.",
  icons: {
    icon: "/favicon.ico", // Appare in tutte le tab del browser
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}