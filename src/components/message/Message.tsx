import Image from 'next/image';
import React, { useCallback } from 'react';

import clsx from 'clsx';

import { calculateStyle } from '@/utils/calculateStyle';

interface MessageProps {
  sender: 'me' | 'other';
  children: React.ReactNode;
}

interface TextMessageProps {
  text?: string;
}

interface ImageMessageProps {
  urls?: string[];
}

const senderStyle = {
  me: 'justify-end',
  other: '',
};

const textStyle = {
  me: 'rounded-l-lg rounded-br-lg bg-primary-50',
  other: 'rounded-r-lg rounded-bl-lg bg-gray-100',
};

export const TextMessage = ({ text }: TextMessageProps) => {
  if (!text) return null;
  return text;
};

export const ImageMessage = ({ urls }: ImageMessageProps) => {
  if (!urls) return null;
  return (
    <div className="max-w-fit overflow-x-auto block whitespace-nowrap">
      {urls?.map((url) => (
        <button
          key={url}
          type="button"
          className="w-30 h-30 mr-2 rounded-lg inline-flex items-center justify-center"
          onClick={() => {
            // FIXME: 임시 url
            window.open(
              'https://map.naver.com/p/entry/place/1028649657?c=15.00,0,0,0,dh',
            );
          }}
        >
          <img src={url} alt="img" className="rounded-lg" />
        </button>
      ))}
    </div>
  );
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
      {sender !== 'me' && <AvatarIcon />}
      <div className={clsx('p-2.5 w-fit', calculateStyle(sender, textStyle))}>
        {children}
      </div>
    </li>
  );
};
