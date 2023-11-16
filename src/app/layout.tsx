import type { Metadata } from 'next';
// import "@/app/styles/globals.css";
import "@/app/styles/animate/animate.min.css";
import "@/app/styles/owlcarousel/assets/owl.carousel.min.css";
import "@/app/styles/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "@/app/styles/bootstrap.min.css";
import "@/app/styles/style.css"
import { inter, roboto } from './fonts';
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
      <body className={`${inter.className} ${roboto.className}`}>
        {children}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="wow/wow.min.js" strategy="lazyOnload" />
        <Script src="easing/easing.min.js" strategy="lazyOnload" />
        <Script src="waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/moment.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/moment-timezone.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/tempusdominus-bootstrap-4.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
