'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { http } from '@/apis/http';
import { Loading } from '@/components/loading';

const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    try {
      const data = http.get(`/login/kakao?code=${code}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <Loading />
    </div>
  );
};

export default Page;
