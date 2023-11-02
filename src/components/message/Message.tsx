import React from 'react';

import clsx from 'clsx';

import { calculateStyle } from '@/utils/calculateStyle';

interface MessageProps {
  type?: 'image' | 'text';
  sender: 'me' | 'other';
  text: string;
}

const senderStyle = {
  me: 'mr-3 justify-end',
  other: 'ml-3',
};

const textStyle = {
  me: 'rounded-l-lg rounded-br-lg bg-primary-50',
  other: 'rounded-r-lg rounded-bl-lg bg-gray-100',
};

export const Message = ({ type, sender, text }: MessageProps) => {
  return (
    <li className={clsx('my-2 flex', calculateStyle(sender, senderStyle))}>
      <div
        className={clsx(
          'w-fit max-w-[250px] p-2.5',
          calculateStyle(sender, textStyle),
        )}
      >
        {text}
      </div>
    </li>
  );
};
