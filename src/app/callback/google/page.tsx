'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { http } from '@/apis/http';
import { API } from '@/apis/type';
import { Loading } from '@/components/loading';
import { TOKEN_KEY, USER_NAME_KEY } from '@/constants';

const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    http
      .get<API['oauthLogin']['response']>(`/login/google?code=${code}`)
      .then((res) => {
        const token = res.accessToken;
        document.cookie = `${TOKEN_KEY}=${encodeURIComponent(token)}; path=/;`;
        localStorage.setItem(USER_NAME_KEY, res.name);
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
