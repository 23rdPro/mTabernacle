import localFont from '@next/font/local';
import { Inter } from 'next/font/google';

export const mercury = localFont({
    src: [
      {
        path: '../../public/fonts/Mercury-Regular.svg',
      },
      {
        path: '../../public/fonts/Mercury-Regular.eot'
      },
      {
        path: '../../public/fonts/Mercury-Regular.ttf'
      },
      {
        path: '../../public/fonts/Mercury-Regular.woff'
      }
    ]
})

export const faWebFont = localFont({
    src: [
        {
            path: '../../public/fonts/fontawesome-webfont.eot'
        },
        {
            path: '../../public/fonts/fontawesome-webfont.svg'
        },
        {
            path: '../../public/fonts/fontawesome-webfont.ttf'
        },
        {
            path: '../../public/fonts/fontawesome-webfont.woff'
        },
        {
            path: '../../public/fonts/fontawesome-webfont.woff2'
        },
    ]
})

export const fa = localFont({
    src: [
        {
            path: '../../public/fonts/FontAwesome.otf'
        }
    ]
})

export const lg = localFont({
    src: [
        {
            path: '../../public/fonts/lg.eot'
        },
        {
            path: '../../public/fonts/lg.svg'
        },
        {
            path: '../../public/fonts/lg.ttf'
        },
        {
            path: '../../public/fonts/lg.woff'
        }
    ]
})

export const linearIcons = localFont({
    src: [
        {
            path: '../../public/fonts/Linearicons.eot'
        },
        {
            path: '../../public/fonts/Linearicons.ttf'
        },
        {
            path: '../../public/fonts/Linearicons.woff'
        }
    ]
})

export const materialDesignIcons = localFont({
    src: [
        {
            path: '../../public/fonts/materialdesignicons-webfont.eot'
        },
        {
            path: '../../public/fonts/materialdesignicons-webfont.svg'
        },
        {
            path: '../../public/fonts/materialdesignicons-webfont.ttf'
        },
        {
            path: '../../public/fonts/materialdesignicons-webfont.woff'
        },
        {
            path: '../../public/fonts/materialdesignicons-webfont.woff2'
        }
    ]
})

export const inter = Inter({ subsets: ['latin'] })