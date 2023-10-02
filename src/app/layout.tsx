import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import clsx from 'clsx';

import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '핑퐁',
  description: '위치기반 장소 추천 서비스',
  metadataBase: new URL('https://ppingpong.pages.dev/'),
  openGraph: {
    title: 'ppingpong',
    description: '위치기반 장소 추천 서비스',
    type: 'website',
    siteName: 'ppingpong',
    locale: 'ko_KR',
    url: 'https://ppingpong.pages.dev/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={clsx(notoSansKR.className)}>{children}</body>
    </html>
  );
}
