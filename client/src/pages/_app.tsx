import Footer from '@component/components/footer/Footer';
import Navbar from '@component/components/navbar/Navbar';
import '@component/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
