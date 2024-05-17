import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import "./globals.css";
import Logo from "./components/Logo";



export const metadata = {
  title: "watchplug",
  description: "Shop luxury Watches, Purses, & Merch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/WP logo.jpeg" />
      </Head>
      
      <body >
      {children}
      <Footer/>
      </body>
      
    
    </html>
  );
}
