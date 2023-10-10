'use client';

import { useEffect } from 'react';

import { Loading } from '@/components/loading';

export default function Home() {
  // @fixme: 임시로 로그인 체크를 위해 작성
  useEffect(() => {
    localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);
  return (
    <div className="text-h1 text-primary-main bg-primary-50 h-full flex items-center justify-center flex-col p-4">
      main 입니다
      <Loading />
    </div>
  );
}
