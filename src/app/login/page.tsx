import Image from 'next/image';
import React from 'react';

import { OAuthButton } from '@/components/button';

const page = () => {
  return (
    <main className="h-screen bg-primary-50 fixed w-screen flex items-center justify-center flex-col p-6">
      <div className="flex-1 flex items-center">
        <Image
          src="/assets/images/logo.png"
          alt="핑퐁 로고"
          width="280"
          height="170"
        />
      </div>
      <div className="flex flex-col b-0 gap-2 w-full">
        <OAuthButton provider="kakao" />
        <OAuthButton provider="google" />
      </div>
    </main>
  );
};

export default page;
