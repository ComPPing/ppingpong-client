import type { Metadata, Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import clsx from 'clsx';

import ReactQueryProvider from '@/utils/reactQueryProvider';

import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '핑퐁',
  description: '음식점 추천 서비스',
  metadataBase: new URL('https://ppingpong.pages.dev/'),
  openGraph: {
    title: 'ppingpong',
    description: '음식점 추천 서비스',
    type: 'website',
    siteName: 'ppingpong',
    locale: 'ko_KR',
    url: 'https://ppingpong.pages.dev/',
  },
};

export const viewport: Viewport = {
  themeColor: '#fff',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          notoSansKR.className,
          'w-full m-auto max-h-screen bg-slate-50',
        )}
      >
        <ReactQueryProvider>
          <div className="m-auto max-w-md h-full flex flex-col">{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
