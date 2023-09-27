import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        notoSansKR: ['var(--noto-sans-kr)'],
      },
      fontSize: {
        h1: ['1.5rem', { lineHeight: '2rem', fontWeight: 600 }],
        h2: ['1.375rem', { lineHeight: '1.875rem', fontWeight: 600 }],
        h3: ['1.25rem', { lineHeight: '1.75rem', fontWeight: 600 }],
        h4: ['1.125rem', { lineHeight: '1.625rem', fontWeight: 600 }],
        subtitle1: ['1rem', { lineHeight: '1.5rem', fontWeight: 500 }],
        subtitle2: ['0.875rem', { lineHeight: '1.375rem', fontWeight: 500 }],
        body1: ['1rem', { lineHeight: '1.625rem', fontWeight: 400 }],
        body2: ['0.875rem', { lineHeight: '1.5rem', fontWeight: 400 }],
        body3: ['0.75rem', { lineHeight: '1.375rem', fontWeight: 400 }],
        caption: ['0.75rem', { lineHeight: '1.25rem', fontWeight: 400 }],
      },
      colors: {
        black: '#181818',
        white: '#FFFFFF',
        primary: {
          main: '#FD8D32',
          50: '#FFEFD4',
          100: '#D7621A',
          200: '#79451D',
          300: '#413726',
          400: '#2F2C2B',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#DDDDDD',
          400: '#BBBBBB',
          500: '#999999',
          600: '#777777',
          700: '#5B5B5B',
          800: '#444444',
          900: '#262626',
        },
      },
    },
  },
  plugins: [],
};
export default config;
