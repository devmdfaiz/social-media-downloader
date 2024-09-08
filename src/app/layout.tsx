import { Inter } from "next/font/google";
import "./globals.css";

import PreviewContextProvider from "@/context/previewContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

// export const runtime = "edge";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${
          process.env.NODE_ENV !== "production" && "debug-screens"
        } ${inter.className}`}
      >
        <PreviewContextProvider>{children}</PreviewContextProvider>
        <Toaster theme="dark" />
      </body>
    </html>
  );
}
