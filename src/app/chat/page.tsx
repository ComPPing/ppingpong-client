'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';

import {
  ImageMessage,
  MessageContainer,
  TextMessage,
} from '@/components/message';

type MessageType = {
  id: string;
  sender: 'me' | 'other';
  text?: string;
  url?: string[];
  date: Date;
};

const DUMMY_DATA: MessageType[] = [
  {
    id: '0',
    sender: 'other',
    text: '반가워 친구야~ 궁금한거 있으면 뭐든 물어봐!',
    date: new Date(),
  },
  {
    id: '2',
    sender: 'me',
    text: '음식점 추천해줭',
    date: new Date(),
  },
  {
    id: '1',
    sender: 'other',
    url: [
      'http://via.placeholder.com/100x100',
      'http://via.placeholder.com/100x100',
      'http://via.placeholder.com/100x100',
      'http://via.placeholder.com/100x100',
    ],
    text: '여기 어때?!',
    date: new Date(),
  },
];

export default function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<MessageType[]>(DUMMY_DATA);
  const contentsRef = useRef<HTMLOListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    contentsRef.current?.scrollTo({
      top: contentsRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // todo: api 요청
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (input === '') return;
    setMessages((prev) => [
      ...prev,
      {
        id: new Date().toString(),
        sender: 'me',
        type: 'text',
        text: input,
        date: new Date(),
      },
    ]);
    inputRef.current?.setAttribute('disabled', 'disabled');
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: new Date().toString(),
          sender: 'other',
          type: 'text',
          text: '임시 답장!',
          date: new Date(),
        },
      ]);
      inputRef.current?.removeAttribute('disabled');
    }, 1000);
    setInput('');
  };

  return (
    <Fragment>
      <header className="p-3 border-b-2 w-full bg-white/95 h-14 flex items-center">
        <button
          type="button"
          className="flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
        >
          <Image
            src="/assets/icons/left.svg"
            alt="logo"
            width="32"
            height="32"
          />
        </button>
      </header>
      <ol className="text-body3 overflow-y-auto flex-1" ref={contentsRef}>
        {messages.map((message) => (
          <MessageContainer key={message.id} sender={message.sender}>
            <ImageMessage urls={message.url} />
            <TextMessage text={message.text} />
          </MessageContainer>
        ))}
      </ol>
      <div className="border-t-2 border-gray-100 px-2 pt-2 pb-6 bg-white">
        <div className="border-2 border-gray-200 rounded-xl flex bg-none">
          <input
            type="text"
            className="p-1.5 w-full text-body2 focus:outline-none rounded-xl"
            onChange={handleChangeInput}
            onKeyUp={handleKeyUpInput}
            value={input}
            ref={inputRef}
          />
          <button
            className="flex justify-center items-center rounded-xl m-1 bg-primary-100 disabled:opacity-20 transition-opacity ease-in-out duration-200"
            disabled={input === ''}
            onClick={handleSendMessage}
          >
            <Image
              src="/assets/icons/send.svg"
              alt="send"
              width="24"
              height="24"
              className="m-2"
            />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
