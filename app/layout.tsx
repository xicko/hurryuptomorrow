import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HURRY UP TOMORROW - The Weeknd | Countdown",
  description: "Countdown to the release of \"HURRY UP TOMORROW\" by The Weeknd",
  openGraph: {
    images: '/ogimg.jpg'
  },
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
