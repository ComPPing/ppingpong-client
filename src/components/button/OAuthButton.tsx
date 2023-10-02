'use client';

import Image from 'next/image';
import React from 'react';

import { calculateStyle } from '@/utils/calculateStyle';

import { Button } from './Button';

const kakaoURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/kakao`;
const googleURL = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`;

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
    window.location.href = provider === 'kakao' ? kakaoURL : googleURL;
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
