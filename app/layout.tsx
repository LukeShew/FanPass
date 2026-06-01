import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FanPass | Youth Sports Tournament Admission",
  description:
    "FanPass is building unified admission, check-in, and revenue tools for youth sports tournaments.",
  metadataBase: new URL("https://fanpass.app"),
  openGraph: {
    title: "FanPass",
    description:
      "A unified admission and check-in system for youth sports tournaments.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
