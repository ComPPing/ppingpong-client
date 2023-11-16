'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { http } from '@/apis/http';
import { Loading } from '@/components/loading';
import { TOKEN_KEY } from '@/constants/token';

const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    http
      .get(`/login/google?code=${code}`)
      .then((res: any) => {
        document.cookie = `${TOKEN_KEY}=${res.data.accessToken}}`;
        // localStorage.setItem('token', res.data.accessToken);
        window.location.href = '/';
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <Loading />
    </div>
  );
};

export default Page;
