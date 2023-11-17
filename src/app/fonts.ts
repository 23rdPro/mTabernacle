import { Inter, Montserrat, Poppins, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], weight: ['300', '600'] });

export const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '700']});

export const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '700', '900']});

export const roboto = Roboto({ subsets: ['latin'], weight: ['500', '700'], display: 'swap'})