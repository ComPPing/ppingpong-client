'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Message } from '@/components/message';

type MessageType = {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: Date;
};

const DUMMY_DATA: MessageType[] = [
  {
    id: 0,
    sender: 'other',
    text: '반가워 친구야~ 궁금한거 있으면 뭐든 물어봐!',
    time: new Date(),
  },
];

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<MessageType[]>(DUMMY_DATA);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (input === '') return;
    if (e.key === 'Enter') {
      // todo: api 요청
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 1,
          sender: 'me',
          text: input,
          time: new Date(),
        },
      ]);
      setInput('');
    }
  };

  // @fixme: 임시로 로그인 체크를 위해 작성
  useEffect(() => {
    localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);
  return (
    <div className="flex flex-col h-full">
      <header className="p-4 border-b-2">
        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width="140"
          height="30"
        />
      </header>
      <main className="flex-1 overflow-scroll">
        <ol className="text-body2">
          {messages.map((message) => (
            <Message
              text={message.text}
              sender={message.sender}
              key={message.id}
            />
          ))}
        </ol>
      </main>
      <div className="border-t-2 border-gray-100 w-full px-4 pt-2.5 pb-6">
        <input
          type="text"
          className="border-2 p-1 border-gray-200 bg-gray-50 rounded-md w-full h-8 text-body3 focus:outline-none"
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
          value={input}
        />
      </div>
    </div>
  );
}
