import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import '@/app/styles/bootstrap.css';
import '@/app/styles/fonts.css';
import '@/app/styles/style.css';
import { inter, poppins, montserrat, } from './fonts';

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
