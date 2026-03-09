import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vasudev Chemo Pharma",
  description: "Industrial & Specialty Chemical Manufacturer based in Gujarat, India.",
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
