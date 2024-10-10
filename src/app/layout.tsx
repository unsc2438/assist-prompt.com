import { cn } from "@/shadcn/lib/utils";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter_400 = Inter({ subsets: ["latin"], weight: "400" });

export { metadata } from "@/modules/layout/others/metadata";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={cn("h-dvh w-dvw", inter_400.className)}>{children}</body>
    </html>
  );
}
