import "@/styles/globals.css";

import { ReactNode } from "react";

export { metadata } from "@/modules/layout/others/metadata";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
