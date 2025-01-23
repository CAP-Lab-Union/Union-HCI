import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/topnbottom/Navbar';
import Footer from '@/components/topnbottom/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'HCI Research Lab',
  description: 'Advancing HCI through ML and Large Display Research',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}