import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HURRY UP TOMORROW - Countdown",
  description: "Countdown to the release of HURRY UP TOMORROW by The Weeknd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  );
}
