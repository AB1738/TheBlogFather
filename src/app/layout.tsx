import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/customComponents/Navbar";
import { ThemeProvider } from '@/providers/themeprovider'
import Footer from "@/components/customComponents/Footer";
import { Toaster } from "@/components/ui/sonner"


const montserrat = Montserrat({
  subsets: ["latin"]

});


export const metadata: Metadata = {
  title: {
   template:'%s',
   default: "TheBlogFather"
  },
  description: "Blog app created with next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased `}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        <div className="bg-zinc-200 dark:bg-zinc-900 w-full min-h-screen relative">
         {children}
        <Toaster/>
        </div>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}


