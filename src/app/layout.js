import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "./components/Footer";
import "./globals.css";
import Logo from "./components/Logo";
import { ThemeProvider } from "./components/ThemeProvider";
import ChatBot from "./components/ChatBot";
import { AuthContextProvider } from './context/AuthContext';



export const metadata = {
  title: 'FineChrono | Luxury Timepieces, Designer Purses & Premium Merchandise',
  description: 'Discover exquisite luxury watches, designer purses, and premium merchandise at FineChrono. Experience unparalleled craftsmanship and authenticity.',
  keywords: 'luxury watches, designer purses, premium merchandise, Rolex, Hermes, authentic luxury goods, FineChrono',
  openGraph: {
    title: 'FineChrono | Luxury Timepieces & Accessories',
    description: 'Discover exquisite luxury watches, designer purses, and premium merchandise at FineChrono.',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  robots: 'index, follow',
  canonical: 'https://finechrono.com'
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/WP logo.jpeg"/>
      </Head>
      <body className="transition-colors duration-300 dark:bg-gray-900">
        <ThemeProvider>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
          <Footer/>
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
