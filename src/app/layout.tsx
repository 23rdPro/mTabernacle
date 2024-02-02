import type { Metadata } from 'next';
import "@/app/styles/animate/animate.min.css";
import "@/app/styles/owlcarousel/assets/owl.carousel.min.css";
import "@/app/styles/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "@/app/styles/bootstrap.min.css";
import "@/app/styles/style.css"
import "@/app/styles/effects.css";
import "@/app/styles/carousel.css";
import "@/app/styles/swiper.carousel.css";
import "@/app/styles/disciple.blockquote.css";
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import Script from 'next/script';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Loading from './loading';
import React from 'react';

export const metadata: Metadata = {
  title: 'Mercy Tabernacle | Bishop Bankole Jefferson',
  description: '',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" 
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap"
         rel="stylesheet" 
        />
      </head>
      <body>
      {/* <div id="fb-root"></div>
        <Script 
          async 
          defer 
          crossOrigin="anonymous" 
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=2814808405325209&autoLogAppEvents=1" 
          nonce="YOUR_NONCE"
        />  */}
        <Loading />
        <Navbar />
        {children}
        <Footer />
        <Script src="https://unpkg.com/default-passive-events" strategy="beforeInteractive" />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js" 
          // integrity="sha512-CryKbMe7sjSCDPl18jtJI5DR5jtkUWxPXWaLCst6QjH8wxDexfRJic2WRmRXmstr2Y8SxDDWuBO6CQC6IE4KTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          strategy="beforeInteractive"
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" 
                strategy="beforeInteractive" 
        />
        <Script src="https://code.jquery.com/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        {/* <Script defer src="owlcarousel/owl.carousel.min.js" strategy="afterInteractive" /> */}
        <Script src="wow/wow.min.js" strategy="lazyOnload" />
        <Script src="easing/easing.min.js" strategy="lazyOnload" />
        <Script src="waypoints/waypoints.min.js" strategy="lazyOnload" />
        <Script src="counterup/counterup.min.js" strategy="lazyOnload" />
        <Script src="owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/moment.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/moment-timezone.min.js" strategy="lazyOnload" />
        <Script src="tempusdominus/js/tempusdominus-bootstrap-4.min.js" strategy="lazyOnload" />
        <Script src="main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}

