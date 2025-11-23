import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Victor Navarro - Desarrollador Web",
  description: "Portafolio de desarrollo web de [Victor Navarro]",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-background text-text-primary 
                   relative overflow-x-hidden`}
      >
        <div
          className="absolute top-0 left-0 w-full h-full 
                       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                       from-primary/10 via-background/0 to-background -z-10"
        ></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
