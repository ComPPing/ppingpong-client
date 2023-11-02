'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // @fixme: 임시로 로그인 체크를 위해 작성
  useEffect(() => {
    localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);
  return (
    <>
      <header className="p-4">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width="140"
          height="30"
        />
      </header>
      <div className="text-h1 text-primary-main h-full flex items-center justify-center flex-col p-4">
        main 입니다
      </div>
    </>
  );
}
