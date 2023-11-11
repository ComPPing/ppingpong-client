'use client';

import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';

import { Message } from '@/components/message';

type MessageType = {
  id: string;
  sender: 'me' | 'other';
  text: string;
  time: Date;
};

const DUMMY_DATA: MessageType[] = [
  {
    id: '0',
    sender: 'other',
    text: '반가워 친구야~ 궁금한거 있으면 뭐든 물어봐!',
    time: new Date(),
  },
];

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<MessageType[]>(DUMMY_DATA);
  const contentsRef = useRef<HTMLOListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    // localStorage.getItem('token') ?? window.location.replace('/login');
  }, []);

  useEffect(() => {
    contentsRef.current?.scrollTo({
      top: contentsRef.current?.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

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
        id: (messages.length + 1).toString(),
        sender: 'me',
        text: input,
        time: new Date(),
      },
    ]);
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <Fragment>
      <header className="p-3 border-b-2 w-full bg-white/95">
        <Image
          src="/assets/images/smallLogo.png"
          alt="logo"
          width="140"
          height="28"
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
      <div className="border-t-2 border-gray-100 px-2 pt-2 pb-6 bg-white">
        <div className="border-2 border-gray-200 rounded-xl flex bg-none">
          <input
            type="text"
            className="p-1.5 w-full text-body2 focus:outline-none rounded-full"
            onChange={handleChangeInput}
            onKeyUp={handleKeyUpInput}
            value={input}
            ref={inputRef}
          />
          <button
            className="flex justify-center items-center rounded-xl bg-gray-100 m-1"
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
