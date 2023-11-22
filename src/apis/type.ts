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
  oauthLogin: {
    response: {
      id: number;
      name: string;
      createdAt: Date;
      accessToken: string;
    };
  };
};
