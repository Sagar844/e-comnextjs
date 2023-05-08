import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  // console.log(Component , pageProps)
  return (
    <div className='container mx-auto'>
      <NextNProgress color='#1f2937' showOnShallow={true} startPosition={0.3} stopDelayMs={200} height={3} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )

}
