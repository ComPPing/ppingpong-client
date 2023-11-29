'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';

import { useSendMessage } from '@/apis/chat/mutations';
import { useGetTotalMessage } from '@/apis/chat/queries';
import {
  ImageMessage,
  MessageContainer,
  TextMessage,
} from '@/components/message';
import { Message as MessageType } from '@/types';

const InitData: MessageType[] = [
  {
    sender: 'assistant',
    createdAt: new Date(),
    content: '안녕하세요. 무엇을 드시고 싶으신가요?',
  },
];

export default function Chat() {
  const [input, setInput] = useState('');
  const { data } = useGetTotalMessage();
  const [messages, setMessages] = useState<MessageType[]>(
    data?.totalMessages ?? InitData,
  );
  const contentsRef = useRef<HTMLOListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { mutateAsync: sendMessage } = useSendMessage();

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
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (input === '') return;
    inputRef.current?.setAttribute('disabled', 'disabled');

    setMessages((prev) => [
      ...prev,
      {
        sender: 'user',
        createdAt: new Date(),
        content: input,
      },
    ]);
    sendMessage(
      { content: input },
      {
        onSuccess: (message) => {
          setMessages((prev) => [...prev, message]);
          inputRef.current?.removeAttribute('disabled');
        },
        onSettled: () => {
          inputRef.current?.removeAttribute('disabled');
        },
      },
    );
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
      <ol
        className="text-body3 overflow-y-auto flex-1 bg-white"
        ref={contentsRef}
      >
        {messages.map((message) => (
          <MessageContainer
            key={`${message.sender}${message.content}`}
            sender={message.sender}
          >
            <ImageMessage urls={message.restaurantUrls} />
            <TextMessage text={message.content} />
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
