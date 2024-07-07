import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import AntdStyledComponentsRegistry from "@/components/AntdStyledComponentsRegistry";

// components
import { MainLayout } from "@/components";

// styles
import "../styles/globals.css";

// contexts
import UIThemeProvider from "@/context/themeProvider";
import TanstackProvider from "@/context/tanstackContext";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// Meta data
export const metadata: Metadata = {
  title: {
    default: "Grepsr",
    template: "%s | Grepsr",
  },
  description: "Built by sabin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UIThemeProvider>
      <html lang="en">
        <body className={`${manrope.variable}`}>
          <TanstackProvider>
            <AntdStyledComponentsRegistry>
              <MainLayout>{children}</MainLayout>
            </AntdStyledComponentsRegistry>
          </TanstackProvider>
        </body>
      </html>
    </UIThemeProvider>
  );
}
