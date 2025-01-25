import { Chakra_Petch } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-chakraPetch",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "PocaMerc",
  description: "KPOP Related E-Catalogue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.variable} antialiased`}
      >
        <Header />

        {children}

        <Footer />

        <Toaster />
      </body>
    </html>
  );
}
