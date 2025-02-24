import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/topnbottom/Navbar';
import Footer from '@/components/topnbottom/Footer';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Union HCI Research Lab',
  description: 'Union College HCI Research Lab',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}