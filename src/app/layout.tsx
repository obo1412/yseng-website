import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./(nav)/Topbar";
import Bottombar from "./(nav)/Bottombar";

export const metadata: Metadata = {
  title: "영신ENG",
  description: "영신ENG의 회사 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="w-full min-h-screen flex justify-center">
        <div className="w-full md:max-w-[960px] flex flex-col">
          <div className="w-full">
            <Topbar />
          </div>
          <div className="w-full flex-1">{children}</div>
          <div className="w-full bottom-0">
            <Bottombar />
          </div>
        </div>
      </body>
    </html>
  );
}
