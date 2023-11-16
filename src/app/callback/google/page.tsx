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
        const token = res.data.accessToken;
        document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; path=/;`;

        window.location.href = '/main';
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
