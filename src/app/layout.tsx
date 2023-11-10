import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import { inter } from './fonts';

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
