import Image from 'next/image';
import React, { useCallback } from 'react';

import clsx from 'clsx';

import { SenderType } from '@/types';
import { calculateStyle } from '@/utils/calculateStyle';

interface MessageProps {
  sender: 'user' | 'assistant';
  children: React.ReactNode;
}

type SenderStyle = {
  [key in SenderType]: string;
};

const senderStyle: SenderStyle = {
  user: 'justify-end',
  assistant: '',
};

const textStyle: SenderStyle = {
  user: 'rounded-l-lg rounded-br-lg bg-primary-50',
  assistant: 'rounded-r-lg rounded-bl-lg bg-gray-100',
};

export const MessageContainer = ({ sender, children }: MessageProps) => {
  const AvatarIcon = useCallback(() => {
    return (
      <Image
        src="/assets/icons/ppingping.svg"
        width="40"
        height="40"
        alt="핑핑이 이미지"
        className="mr-2"
      />
    );
  }, []);

  return (
    <li
      className={clsx(
        'py-1 px-2 flex items-start disabled:opacity-50',
        calculateStyle(sender, senderStyle),
      )}
    >
      {sender !== 'user' && <AvatarIcon />}
      <div className={clsx('p-2.5 w-fit', calculateStyle(sender, textStyle))}>
        {children}
      </div>
    </li>
  );
};
