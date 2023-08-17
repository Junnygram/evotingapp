import { Header } from '@/src/Components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/src/Components/Footer';
import { AOSInit } from '@/utils/aos';

import ToasterContext from '../app/context/ToasterContext';
import Provider from './context/Providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: ' SUG EVoting App',
  description: 'A web application for voting candidate of your choice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />

      <body className={inter.className}>
        <Provider session={undefined}>
          <ToasterContext />
          <Header />
          {children}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}
