import { Message } from '@/types';

export type API = {
  sendMessage: {
    request: {
      body: {
        content: string;
      };
    };
    response: Message;
  };
  getTotalMessages: {
    response: {
      totalMessages: Message[];
    };
  };
};
