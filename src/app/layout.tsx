import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "सaksham",
  description: "Empowering India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="hi" className="h-full" suppressHydrationWarning>
        <body
          className={cn(
            "relative h-full font-sans antialiased grainy",
            inter.className
          )}
          
        >
          <main className="relative flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex-1">{children}</div>
            {/* <Footer /> */}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
