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
            path: '../../public/FontAwesome.otf'
        }
    ]
})

export const lg = localFont({
    src: [
        {
            path: '../../public/lg.eot'
        },
        {
            path: '../../public/lg.svg'
        },
        {
            path: '../../public/lg.ttf'
        },
        {
            path: '../../public/lg.woff'
        }
    ]
})

export const linearIcons = localFont({
    src: [
        {
            path: '../../public/Linearicons.eot'
        },
        {
            path: '../../public/Linearicons.svg'
        },
        {
            path: '../../public/Linearicons.ttf'
        },
        {
            path: '../../public/Linearicons.woff'
        }
    ]
})

export const materialDesignIcons = localFont({
    src: [
        {
            path: '../../public/materialdesignicons-webfont.eot'
        },
        {
            path: '../../public/materialdesignicons-webfont.svg'
        },
        {
            path: '../../public/materialdesignicons-webfont.ttf'
        },
        {
            path: '../../public/materialdesignicons-webfont.woff'
        },
        {
            path: '../../public/materialdesignicons-webfont.woff2'
        }
    ]
})

export const inter = Inter({ subsets: ['latin'] })