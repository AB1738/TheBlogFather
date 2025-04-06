import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/customComponents/Navbar";
import { ThemeProvider } from '@/providers/themeprovider'
import Footer from "@/components/customComponents/Footer";
import { Toaster } from "@/components/ui/sonner"


const montserrat = Montserrat({
  subsets: ["latin"]

});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheBlogFather",
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
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased `}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        <div className="bg-zinc-200 dark:bg-zinc-900 w-full min-h-screen relative">
        <main className="sm:max-w-[85%]  mx-auto min-h-screen ">
         {children}
        </main>
        <Toaster/>
        </div>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}


