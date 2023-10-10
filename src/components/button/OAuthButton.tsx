'use client';

import Image from 'next/image';
import React from 'react';

import { calculateStyle } from '@/utils/calculateStyle';

import { Button } from './Button';

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`;
const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email&response_type=code`;

interface SocialLoginButtonProps {
  provider: 'kakao' | 'google';
}

const OAuthButton = ({ provider }: SocialLoginButtonProps) => {
  const Icon = (
    <Image
      src={`/assets/icons/${provider}.svg`}
      alt={`${provider} 로고`}
      width="20"
      height="20"
    />
  );

  const OAuthStyle = {
    kakao: 'bg-[#FEE501] text-black',
    google: 'bg-white text-black',
  };

  const handleClick = () => {
    window.location.href = provider === 'kakao' ? KAKAO_URL : GOOGLE_URL;
  };

  return (
    <Button
      className={calculateStyle(provider, OAuthStyle)}
      text={provider === 'kakao' ? '카카오로 시작하기' : 'Google로 시작하기'}
      onClick={handleClick}
      type="button"
      leftIcon={Icon}
    />
  );
};

export { OAuthButton };
