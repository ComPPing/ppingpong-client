export type Message = {
  sender: SenderType;
  createdAt: Date;
  content: string;
  restaurantUrls?: string[];
};

export type SenderType = 'user' | 'assistant';
