import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Abdul Kaium Mia | 2D Materials & Semiconductor Devices",
  description:
    "Personal research website of Dr. Abdul Kaium Mia, researcher in 2D materials, transition metal dichalcogenides, CVD growth, semiconductor devices and optoelectronics.",
  keywords: [
    "Abdul Kaium Mia",
    "2D materials",
    "TMDs",
    "WS2",
    "MoS2",
    "CVD",
    "nanotechnology",
    "semiconductor devices",
    "optoelectronics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}