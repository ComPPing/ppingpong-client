'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
  const contentsRef = useRef<HTMLOListElement>(null);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);

  useEffect(() => {
    contentsRef.current?.scrollTo({
      top: contentsRef.current?.scrollHeight + 100,
      behavior: 'smooth',
    });
  }, [messages]);

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

  return (
    <div className="h-screen flex flex-col relative">
      <header className="p-3 border-b-2">
        <Image
          src="/assets/images/smallLogo.png"
          alt="logo"
          width="140"
          height="30"
        />
      </header>
      <ol className="text-body2 overflow-scroll flex-1" ref={contentsRef}>
        {messages.map((message) => (
          <Message
            text={message.text}
            sender={message.sender}
            key={message.id}
          />
        ))}
      </ol>
      <div className="border-t-2 border-gray-100 w-full px-4 pt-3 pb-8 sticky bottom-0">
        <input
          type="text"
          className="border-2 p-1 border-gray-200 bg-gray-50 rounded-md w-full h-10 text-body2 focus:outline-none"
          onChange={handleChangeInput}
          onKeyUp={handleKeyUpInput}
          value={input}
        />
      </div>
    </div>
  );
}
