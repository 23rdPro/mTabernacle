import type { Metadata } from 'next';
import "@/app/styles/globals.css";
import { inter, poppins, montserrat, } from './fonts';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Mercy Tabernacle | Bishop Bankole Jefferson',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
