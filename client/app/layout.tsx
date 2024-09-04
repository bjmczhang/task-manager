import type { Metadata } from "next";
import { Red_Hat_Display
 } from "next/font/google";
import "./globals.css";

const red_hat_display
 = Red_Hat_Display
({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud-Based Task Manager",
  description: "Generated by Benjamin from DDNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={red_hat_display
.className}>
        <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-gradient-to-br from-[#e1f2fb] to-[#f4f3e5]">
          {children}
        </div>
      </body>
    </html>
  );
}
