import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import './globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: 'ppingpong',
  description: '위치기반 장소 추천 서비스',
  openGraph: {
    title: 'ppingpong',
    description: '위치기반 장소 추천 서비스',
    type: 'website',
    siteName: 'ppingpong',
    locale: 'ko_KR',
    url: 'https://ppingpong.pages.dev/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '핑퐁 로고',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  );
}
