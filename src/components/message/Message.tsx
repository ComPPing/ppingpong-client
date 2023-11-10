import Image from 'next/image';
import React from 'react';

import clsx from 'clsx';

import { calculateStyle } from '@/utils/calculateStyle';

interface MessageProps {
  type?: 'image' | 'text';
  sender: 'me' | 'other';
  text: string;
}

const senderStyle = {
  me: 'justify-end',
  other: '',
};

const textStyle = {
  me: 'rounded-l-lg rounded-br-lg bg-primary-50',
  other: 'rounded-r-lg rounded-bl-lg bg-gray-100',
};

export const Message = ({ type, sender, text }: MessageProps) => {
  return (
    <li
      className={clsx(
        'my-2 mx-3 flex items-start',
        calculateStyle(sender, senderStyle),
      )}
    >
      {sender !== 'me' && (
        <Image
          src="/assets/icons/ppingping.svg"
          width="40"
          height="40"
          alt="핑핑이 이미지"
          className="mr-2"
        />
      )}
      <div className={clsx('w-fit p-2.5', calculateStyle(sender, textStyle))}>
        {text}
      </div>
    </li>
  );
};
