import './globals.css';
import Bg from '../utils/Bg';
import { Poppins } from 'next/font/google';
import ScrollToTop from './scrollToTop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'KSM IoT UPNVJ',
  description: 'Website resmi KSM IoT UPNVJ',
  icons: {
    Icon: '@/public/Logo_IoT.png',
    shortcut: '/Logo_IoT.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body
        suppressHydrationWarning
        className="relative min-h-screen flex flex-col"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <Bg />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}