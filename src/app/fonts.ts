import localFont from "next/font/local";
import { Inter, Montserrat, Poppins } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '700']});

export const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900']});