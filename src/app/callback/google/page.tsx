'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

import { httpWithoutBaseUrl } from '@/apis/http';
import { Loading } from '@/components/loading';

const Page = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    httpWithoutBaseUrl
      .post(`https://oauth2.googleapis.com/token`, {
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
        code: code,
      })
      .then((res: any) => {
        fetch(
          `https://www.googleapis.com/userinfo/v2/me?access_token=${res.access_token!}`,
        ).then((data) => {
          console.log(data);
        });
      });
  }, []);
  return (
    <div className="flex items-center justify-center h-full">
      <Loading />
    </div>
  );
};

export default Page;
