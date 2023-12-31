import Image from 'next/image';
import React from 'react';

import { OAuthButton } from '@/components/button';

const Login = () => {
  return (
    <main className="h-full bg-primary-50 flex items-center justify-center flex-col px-6 py-12">
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

export default Login;
