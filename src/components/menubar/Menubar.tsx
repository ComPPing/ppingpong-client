'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const Menubar = () => {
  const pathname = usePathname();

  return (
    <div className=" w-full flex pt-4 pb-6 px-8 border-t-2 justify-between items-center bg-white">
      <Link href="/main">
        <Image
          src="/assets/icons/home.svg"
          alt="홈 화면 가기"
          width="25"
          height="25"
          className={
            pathname === '/main' || pathname === '/'
              ? 'opacity-100'
              : 'opacity-40'
          }
        />
      </Link>
      <Link href="/chat">
        <Image
          src="/assets/icons/chat.svg"
          alt="채팅창 가기"
          width="25"
          height="25"
          className={pathname === '/chat' ? 'opacity-100' : 'opacity-40'}
        />
      </Link>
      <Link href="/main/bookmark">
        <Image
          src="/assets/icons/bookmark.svg"
          alt="북마크 페이지 가기"
          width="25"
          height="25"
          className={
            pathname === '/main/bookmark' ? 'opacity-100' : 'opacity-40'
          }
        />
      </Link>
      <Link href="/main/user">
        <Image
          src="/assets/icons/user.svg"
          alt="설정페이지 가기"
          width="25"
          height="25"
          className={pathname === '/main/user' ? 'opacity-100' : 'opacity-40'}
        />
      </Link>
    </div>
  );
};
